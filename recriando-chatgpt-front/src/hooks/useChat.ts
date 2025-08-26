import { useState, useCallback } from 'react';
import { chatApi } from '../services/chatApi';
import type { Conversation, ConversationHistory } from '../types';

export const useChat = () => {
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [conversationHistory, setConversationHistory] = useState<ConversationHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Enviar mensagem
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await chatApi.sendMessage({
        message: content,
        conversationId: currentConversation?.id,
      });

      setCurrentConversation({
        id: response.conversationId,
        messages: response.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })),
      });
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente.');
      console.error('Erro ao enviar mensagem:', err);
    } finally {
      setIsLoading(false);
    }
  }, [currentConversation?.id]);

  // Carregar conversa
  const loadConversation = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatApi.getConversation(id);
      setCurrentConversation({
        id: response.conversationId,
        messages: response.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })),
      });
    } catch (err) {
      setError('Erro ao carregar conversa.');
      console.error('Erro ao carregar conversa:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Finalizar conversa
  const finishConversation = useCallback(async () => {
    if (!currentConversation?.id) return;

    try {
      await chatApi.finishConversation(currentConversation.id);
      loadConversationHistory(); // Atualizar histórico
    } catch (err) {
      setError('Erro ao finalizar conversa.');
      console.error('Erro ao finalizar conversa:', err);
    }
  }, [currentConversation?.id]);

  // Nova conversa
  const startNewConversation = useCallback(() => {
    setCurrentConversation(null);
    setError(null);
  }, []);

  // Carregar histórico
  const loadConversationHistory = useCallback(async () => {
    try {
      const history = await chatApi.getConversationHistory();
      setConversationHistory(history.map(conv => ({
        ...conv,
        startedAt: new Date(conv.startedAt),
        finishedAt: new Date(conv.finishedAt),
      })));
    } catch (err) {
      console.error('Erro ao carregar histórico:', err);
    }
  }, []);

  return {
    currentConversation,
    conversationHistory,
    isLoading,
    error,
    sendMessage,
    loadConversation,
    finishConversation,
    startNewConversation,
    loadConversationHistory,
  };
};
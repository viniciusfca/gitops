import axios from 'axios';
import type { ChatResponse, SendMessageRequest, ConversationHistory } from '../types';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatApi = {
  // Enviar mensagem
  sendMessage: async (data: SendMessageRequest): Promise<ChatResponse> => {
    const response = await api.post('/chat', data);
    return response.data;
  },

  // Buscar conversa específica
  getConversation: async (id: string): Promise<ChatResponse> => {
    const response = await api.get(`/chat/conversation/${id}`);
    return response.data;
  },

  // Finalizar conversa
  finishConversation: async (id: string): Promise<void> => {
    await api.put(`/chat/conversation/${id}/close`);
  },

  // Buscar histórico de conversas
  getConversationHistory: async (): Promise<ConversationHistory[]> => {
    const response = await api.get('/chat/conversation/history');
    return response.data;
  },
};
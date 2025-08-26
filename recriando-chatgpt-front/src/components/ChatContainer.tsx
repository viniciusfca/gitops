import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import type { Message as MessageType } from '../types';
import { Bot } from 'lucide-react';

interface ChatContainerProps {
  messages: MessageType[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error: string | null;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  onSendMessage,
  isLoading,
  error,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="h-full flex flex-col bg-white">
        {/* Welcome screen */}
        <div className="flex-1 flex items-center justify-center pt-16 lg:pt-0 min-h-0">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Como posso ajudar você hoje?
            </h1>
            
            <div className="grid grid-cols-1 grid-cols-2 gap-4 mt-8 max-w-2xl">
              <button
                onClick={() => onSendMessage("Me ajude a fazer um brainstorm de ideias criativas para meu projeto")}
                className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors text-left"
              >
                <h3 className="font-medium text-gray-900 mb-2">💡 Brainstorm</h3>
                <p className="text-sm text-gray-600">Gere ideias criativas para seus projetos</p>
              </button>
              
              <button
                onClick={() => onSendMessage("Preciso de ajuda com redação e textos")}
                className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors text-left"
              >
                <h3 className="font-medium text-gray-900 mb-2">✍️ Escrever</h3>
                <p className="text-sm text-gray-600">Ajuda com redação e textos</p>
              </button>
              
              <button
                onClick={() => onSendMessage("Quero fazer análise de dados e obter insights")}
                className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors text-left"
              >
                <h3 className="font-medium text-gray-900 mb-2">📊 Analisar</h3>
                <p className="text-sm text-gray-600">Análise de dados e insights</p>
              </button>
              
              <button
                onClick={() => onSendMessage("Preciso de assistência com código e desenvolvimento")}
                className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors text-left"
              >
                <h3 className="font-medium text-gray-900 mb-2">💻 Programar</h3>
                <p className="text-sm text-gray-600">Assistência com código e desenvolvimento</p>
              </button>
            </div>
          </div>
        </div>

        {/* MessageInput sempre visível */}
        <div className="flex-shrink-0">
          <MessageInput 
            onSendMessage={onSendMessage} 
            isLoading={isLoading} 
          />
        </div>

        {error && (
          <div className="mx-4 mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
              {error}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          
          {/* Loading indicator */}
          {isLoading && (
            <div className="bg-gray-50 border-b border-black/5">
              <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    AI
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mx-4 mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
            {error}
          </div>
        </div>
      )}

      {/* Input fixo na parte inferior quando há mensagens */}
      <MessageInput 
        onSendMessage={onSendMessage} 
        isLoading={isLoading} 
      />
    </div>
  );
};
import React from 'react';
import type { Message as MessageType } from '../types';
import { User, Bot } from 'lucide-react';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  if (isUser) {
    // Mensagem do usuário - alinhada à direita
    return (
      <div className="message-user border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex gap-4 justify-end">
            {/* Content */}
            <div className="flex-1 min-w-0 max-w-3xl">
              <div className="text-gray-800 leading-7 whitespace-pre-wrap text-right">
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  textAlign: 'left',
                  maxWidth: '100%'
                }}>
                  {message.content}
                </div>
              </div>
            </div>
            
            {/* Avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center text-white text-sm font-medium bg-emerald-500">
              U
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mensagem do AI - alinhada à esquerda
  return (
    <div className="message-assistant border-b">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center text-white text-sm font-medium bg-purple-600">
            AI
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-gray-800 leading-7 whitespace-pre-wrap">
              {message.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
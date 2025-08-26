import React from 'react';
import type { ConversationHistory } from '../types';
import { MessageSquare, Plus, X, Menu } from 'lucide-react';

interface SidebarProps {
  conversations: ConversationHistory[];
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onFinishConversation: () => void;
  currentConversationId?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  onSelectConversation,
  onNewConversation,
  onFinishConversation,
  currentConversationId,
  isOpen,
  onToggle,
}) => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Hoje';
    if (days === 1) return 'Ontem';
    if (days < 7) return `${days} dias atrás`;
    return date.toLocaleDateString('pt-BR');
  };

  const truncateMessage = (message: string, maxLength = 50) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + '...';
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="lg:hidden p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
        style={{
          display: isOpen ? 'none' : 'block',
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 50
        }}
      >
        <Menu size={20} style={{color: '#374151'}} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="mobile-overlay lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`bg-white flex flex-col w-80 h-screen ${
        isOpen ? 'sidebar-mobile open' : 'sidebar-mobile'
      } sidebar-desktop`} style={{borderRight: '1px solid #e5e7eb'}}>
        {/* Header */}
        <div className="flex items-center justify-between p-3" style={{borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
          <h1 className="text-lg font-medium" style={{color: '#333'}}>ChatGPT</h1>
          <button
            onClick={onToggle}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={20} style={{color: '#6b7280'}} />
          </button>
        </div>

        {/* New conversation button */}
        <div className="p-3">
          <button
            onClick={() => {
              onNewConversation();
              onToggle();
            }}
            className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-sm"
            style={{
              border: '1px solid #e5e7eb',
              color: '#374151',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Plus size={16} />
            Novo chat
          </button>
        </div>

        {/* Finish current conversation */}
        {currentConversationId && (
          <div className="px-3 pb-3">
            <button
              onClick={onFinishConversation}
              className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-sm"
              style={{
                border: '1px solid #fecaca',
                color: '#dc2626',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={16} />
              Finalizar conversa
            </button>
          </div>
        )}

        {/* Conversations list */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <h2 className="text-xs font-medium mb-3 uppercase" style={{color: '#6b7280', letterSpacing: '0.05em'}}>
              Hoje
            </h2>
            
            {conversations.length === 0 ? (
              <div className="text-sm text-center py-8" style={{color: '#9ca3af'}}>
                Nenhuma conversa salva
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => {
                      onSelectConversation(conversation.id);
                      onToggle();
                    }}
                    className="rounded-lg transition-colors"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px',
                      border: 'none',
                      background: currentConversationId === conversation.id ? '#f3f4f6' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (currentConversationId !== conversation.id) {
                        e.currentTarget.style.backgroundColor = '#f9fafb';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentConversationId !== conversation.id) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare size={16} style={{color: '#9ca3af', flexShrink: 0}} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm truncate" style={{color: '#374151'}}>
                          {truncateMessage(conversation.lastMessage)}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
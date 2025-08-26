import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage, 
  isLoading, 
  disabled = false 
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading || disabled) return;

    onSendMessage(message);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="bg-white p-4" style={{borderTop: '1px solid rgba(0,0,0,0.1)'}}>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="input-container" style={{position: 'relative'}}>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Envie uma mensagem..."
            disabled={isLoading || disabled}
            className="input-field"
            rows={1}
            style={{paddingRight: '50px'}}
          />
          <button
            type="submit"
            disabled={!message.trim() || isLoading || disabled}
            className={`send-button ${
              message.trim() && !isLoading && !disabled ? 'active' : 'inactive'
            }`}
          >
            <Send size={16} />
          </button>
        </div>
        
        {isLoading && (
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <span>ChatGPT está digitando...</span>
          </div>
        )}
      </form>
    </div>
  );
};
import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatContainer } from './components/ChatContainer';
import { useChat } from './hooks/useChat';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const {
    currentConversation,
    conversationHistory,
    isLoading,
    error,
    sendMessage,
    loadConversation,
    finishConversation,
    startNewConversation,
    loadConversationHistory,
  } = useChat();

  // Carregar histórico ao montar o componente e ajustar sidebar
  useEffect(() => {
    loadConversationHistory();
    // Abrir sidebar automaticamente no desktop
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  }, [loadConversationHistory]);

  const handleSelectConversation = async (id: string) => {
    await loadConversation(id);
    setSidebarOpen(false);
  };

  const handleNewConversation = () => {
    startNewConversation();
    setSidebarOpen(false);
  };

  const handleFinishConversation = async () => {
    await finishConversation();
    startNewConversation();
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex bg-white">
      <Sidebar
        conversations={conversationHistory}
        onSelectConversation={handleSelectConversation}
        onNewConversation={handleNewConversation}
        onFinishConversation={handleFinishConversation}
        currentConversationId={currentConversation?.id}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen chat-container">
        <ChatContainer
          messages={currentConversation?.messages || []}
          onSendMessage={sendMessage}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;

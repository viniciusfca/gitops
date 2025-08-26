export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  messages: Message[];
}

export interface ConversationHistory {
  id: string;
  startedAt: Date;
  finishedAt: Date;
  messageCount: number;
  lastMessage: string;
}

export interface ChatResponse {
  conversationId: string;
  messages: Message[];
}

export interface SendMessageRequest {
  message: string;
  conversationId?: string;
}


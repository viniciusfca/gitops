# ChatGPT Clone - Frontend

Frontend React moderno e responsivo para o clone do ChatGPT, desenvolvido com Vite, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento rápido
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP
- **Lucide React** para ícones
- **Hooks customizados** para gerenciamento de estado

## 🎯 Funcionalidades

- ✅ Interface semelhante ao ChatGPT
- ✅ Chat em tempo real com IA
- ✅ Histórico de conversas
- ✅ Sidebar responsiva
- ✅ Suporte mobile
- ✅ Indicadores de carregamento
- ✅ Tratamento de erros
- ✅ Auto-scroll nas mensagens

## 📱 Layout

### Desktop
- Sidebar fixa com histórico de conversas
- Área principal de chat
- Input com auto-resize
- Botões de ação

### Mobile
- Sidebar com overlay
- Interface otimizada para touch
- Menu hambúrguer
- Layout responsivo

## 🛠️ Como executar

### Pré-requisitos
- Node.js 18+
- Backend executando em http://localhost:3000

### Instalação
```bash
cd recriando-chatgpt-front
npm install
npm run dev
```

A aplicação estará disponível em http://localhost:5173

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ChatContainer.tsx   # Container principal do chat
│   ├── Message.tsx         # Componente de mensagem
│   ├── MessageInput.tsx    # Input para envio de mensagens
│   └── Sidebar.tsx         # Barra lateral com histórico
├── hooks/               # Hooks customizados
│   └── useChat.ts          # Hook para gerenciamento do chat
├── services/            # Serviços de API
│   └── chatApi.ts          # Cliente HTTP para API
├── types/               # Definições TypeScript
│   └── chat.ts             # Tipos do chat
├── App.tsx             # Componente principal
├── main.tsx            # Entrada da aplicação
└── index.css           # Estilos globais com Tailwind
```

## 🎨 Componentes

### ChatContainer
- Exibe lista de mensagens
- Tela de boas-vindas
- Indicador de carregamento
- Auto-scroll para mensagens

### Message
- Renderiza mensagens do usuário e IA
- Avatares distintos por papel
- Timestamp das mensagens
- Suporte a texto multilinha

### MessageInput
- Textarea com auto-resize
- Envio por Enter ou botão
- Indicador de carregamento
- Validação de entrada

### Sidebar
- Lista de conversas finalizadas
- Botão nova conversa
- Navegação responsiva
- Formatação de datas

## 🔧 Hooks Customizados

### useChat
Gerencia todo o estado do chat:
- Estado da conversa atual
- Lista de conversas no histórico
- Estados de carregamento e erro
- Funções para enviar mensagens
- Navegação entre conversas

## 🌐 Integração com API

### Endpoints utilizados:
- `POST /chat` - Enviar mensagem
- `GET /chat/conversations/:id` - Buscar conversa
- `PUT /chat/conversations/:id/close` - Finalizar conversa
- `GET /chat/conversations/history` - Listar histórico

### Tratamento de erros:
- Conexão com backend
- Validação de entrada
- Feedback visual de erros
- Retry automático

## 📱 Responsividade

### Breakpoints:
- Mobile: < 1024px (sidebar em overlay)
- Desktop: ≥ 1024px (sidebar fixa)

### Otimizações mobile:
- Touch targets adequados
- Viewport otimizado
- Scroll suave
- Menu colapsável

## 🎨 Design System

### Cores principais:
- Sidebar: Gray-900
- Chat: White/Gray-50 alternado
- Usuário: Blue-500
- IA: Green-500
- Erros: Red-500

### Tipografia:
- Sistema de fontes nativo
- Hierarquia clara
- Legibilidade otimizada

## 🚀 Build para Produção

```bash
npm run build
npm run preview
```

## 🔧 Desenvolvimento

### Scripts disponíveis:
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Linter ESLint

### Hot Reload:
- Atualização automática de componentes
- Preservação de estado
- Feedback instantâneo

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
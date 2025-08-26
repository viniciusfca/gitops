# ChatGPT Clone - Frontend

Uma interface web moderna para um clone do ChatGPT, construída com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Chat em tempo real**: Interface intuitiva para conversas com IA
- **Histórico de conversas**: Visualize e retome conversas anteriores
- **Design responsivo**: Funciona perfeitamente em desktop e mobile
- **Sidebar interativa**: Navegue facilmente entre conversas
- **Interface limpa**: Design inspirado no ChatGPT original

## 🛠 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento rápido
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP
- **Lucide React** para ícones
- **ESLint** e **Prettier** para qualidade de código

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Backend do ChatGPT Clone rodando na porta 3000

## 🚀 Como executar

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd recriando-chatgpt-front
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o ambiente
O frontend está configurado para se conectar ao backend em `http://localhost:3000`. 
Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

### 4. Execute em modo de desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### 5. Build para produção
```bash
npm run build
```

### 6. Preview da build de produção
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ChatContainer.tsx    # Container principal do chat
│   ├── Message.tsx          # Componente de mensagem
│   ├── MessageInput.tsx     # Input para novas mensagens
│   └── Sidebar.tsx          # Barra lateral com histórico
├── hooks/               # Custom hooks
│   └── useChat.ts           # Hook para gerenciar estado do chat
├── services/            # Serviços e APIs
│   └── chatApi.ts           # Cliente para API do backend
├── types/               # Definições de tipos TypeScript
│   ├── chat.ts              # Tipos relacionados ao chat
│   └── index.ts             # Re-exports dos tipos
└── utils/               # Utilitários
```

## 🎯 Funcionalidades Detalhadas

### Chat
- Envio de mensagens em tempo real
- Indicador de loading durante processamento
- Scroll automático para novas mensagens
- Tratamento de erros

### Sidebar
- Lista de conversas finalizadas
- Busca por conversas anteriores
- Criação de nova conversa
- Finalização de conversa atual
- Design responsivo com overlay mobile

### Integração com Backend
- Comunicação via API REST
- Gestão de estado local para melhor UX
- Sincronização automática do histórico
- Tratamento de erros de rede

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Executa linting
- `npm run lint:fix` - Corrige problemas de linting automaticamente

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

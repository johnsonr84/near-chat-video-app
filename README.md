# NEAR — Real-Time Chat & Video Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?logo=clerk)](https://clerk.com/)
[![Convex](https://img.shields.io/badge/Convex-Realtime-orange)](https://convex.dev/)
[![Stream](https://img.shields.io/badge/Stream-Chat%20%26%20Video-success)](https://getstream.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 💬 NEAR — Modern Chat & Video Calling App

**NEAR** is a production-ready **real-time messaging and HD video calling platform** built with a modern full-stack architecture.

It combines:
- ⚡ Lightning-fast real-time chat  
- 📹 One-click HD video calls  
- 🔐 Secure authentication  
- 🔄 Reactive real-time data sync  

…into a single seamless Next.js 15 application.

Designed as both a **portfolio centerpiece** and a **real-world SaaS foundation**.

---

## 🖼️ Screenshots

### 🏠 Home
![Home](./screenshots/home.png)

### ✨ Features
![Features](./screenshots/features.png)

### 💬 Chat
![Chat](./screenshots/chat.png)

### 🎥 Video Call
![Video](./screenshots/video.png)

---

## ✨ Core Features

### 🔐 Authentication (Clerk)
- Secure sign-up and sign-in flows
- Middleware-protected routes
- User profile management
- JWT integration for Convex

### 💬 Real-Time Messaging
- Channel-based chat via Stream Chat
- Message persistence and history
- Typing indicators and presence
- Reactive Convex subscriptions

### 👥 Group Chats
- Multi-user conversations
- Shared video call rooms per channel

### 🎥 HD Video Calls
- One-click calls via Stream Video
- Token-secured access
- Dynamic participant layouts
- Screen sharing support

### 📱 Responsive UI
- Mobile-first design
- Sidebar-based dashboard layout
- Polished loading and error states

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js 15, React 19 |
| Language | TypeScript |
| Auth | Clerk |
| Realtime DB | Convex |
| Chat | Stream Chat |
| Video | Stream Video |
| UI | Tailwind CSS v4, Radix UI |
| Deployment | Vercel |

---

## 📁 Project Structure

```plaintext
near-chat-video-app/
│
├── app/
│   ├── page.tsx
│   ├── (signed-in)/
│   │   ├── layout.tsx
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       └── video-call/[id]/
│
├── components/
│   └── ConvexClientProvider.tsx
│
├── convex/
│   ├── schema.ts
│   ├── users.ts
│   └── auth.config.ts
│
├── lib/
│   ├── stream.ts
│   └── streamServer.ts
│
├── middleware.ts
└── screenshots/
```

---

## ⚙️ Installation & Development

```bash
git clone https://github.com/johnsonr84/near-chat-video-app
cd near-chat-video-app
pnpm install
pnpm dev
```

- App runs at: http://localhost:3000  
- Convex runs concurrently in dev mode

---

## 🔐 Environment Variables

Create a `.env.local` file:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_FRONTEND_API_URL=your_clerk_issuer_domain

# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Stream (Chat + Video)
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET_KEY=your_stream_api_secret
```

---

## 🚀 Deployment

1. Push to GitHub  
2. Import into Vercel  
3. Add environment variables  
4. Deploy 🚀  

---

## 📄 License

MIT © Robert Johnson

## 👨‍💻 Author

## Robert Johnson
## Full-Stack Software Engineer
### https://robertjohnsonportfolio.com

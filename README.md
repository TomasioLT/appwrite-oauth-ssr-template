# Appwrite OAuth SSR Template

A modern authentication template built with Next.js, Appwrite, and shadcn/ui. Features OAuth authentication (Google), email/password login, and a beautiful dashboard with sidebar navigation.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Appwrite** - Backend as a Service for authentication
- **shadcn/ui** - Beautiful UI components built on Radix UI
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Features

- 🔐 OAuth authentication (Google)
- 📧 Email/Password authentication
- 🛡️ Protected routes with middleware
- 📱 Responsive sidebar layout
- 🎨 Beautiful UI with shadcn/ui components
- 🌓 Theme support (light/dark mode)
- ⚡ Server-side rendering (SSR)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An [Appwrite](https://appwrite.io/) account and project
- Google OAuth credentials (optional, for OAuth login)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TomasioLT/appwrite-oauth-ssr-template.git
cd appwrite-oauth-ssr-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables:

Rename `env.example` to `.env`:

```bash
# Windows
ren env.example .env

# macOS/Linux
mv env.example .env
```

4. Edit the `.env` file with your Appwrite credentials:

```env
# Get these from your Appwrite Console (https://cloud.appwrite.io)

# Appwrite API Key (Admin) - Create in your project's API Keys section
NEXT_APPWRITE_KEY=your_api_key_here

# Appwrite Endpoint - Your Appwrite instance URL
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1

# Appwrite Project ID - Found in your project settings
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id_here
```

### Setting up Appwrite

1. Create a new project in [Appwrite Console](https://cloud.appwrite.io)
2. Go to **Auth** → **Settings** and add your platform:
   - For development: `http://localhost:3000`
   - For production: Your domain
3. (Optional) Configure OAuth providers:
   - Go to **Auth** → **Settings** → **OAuth2 Providers**
   - Enable Google and add your OAuth credentials
4. Create an API Key:
   - Go to **Overview** → **API Keys**
   - Create a new key with necessary permissions (Sessions, Users)

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
├── app/
│   ├── (dashboard)/          # Protected dashboard routes
│   │   ├── layout.tsx        # Dashboard layout with auth check
│   │   └── page.tsx          # Main dashboard page
│   ├── oauth/                # OAuth callback handler
│   ├── signin/               # Sign in page
│   ├── signup/               # Sign up page
│   └── layout.tsx            # Root layout
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── app-sidebar.tsx       # Main sidebar component
│   ├── nav-user.tsx          # User navigation component
│   └── ...                   # Other components
├── lib/
│   ├── server/
│   │   ├── appwrite.js       # Appwrite server functions
│   │   └── oauth.js          # OAuth handlers
│   └── utils.ts              # Utility functions
└── middleware.ts             # Route protection middleware
```

## Authentication Flow

### Email/Password Authentication

1. User fills out the sign-in/sign-up form
2. Server creates a session with Appwrite
3. Session cookie is set
4. User is redirected to the dashboard

### OAuth Authentication

1. User clicks "Login with Google"
2. Redirected to Google OAuth consent screen
3. After approval, redirected to `/oauth` callback
4. Server creates session with OAuth tokens
5. User is redirected to the dashboard

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy!

### Important: Update Appwrite Settings

After deployment, add your production domain to:

- Appwrite **Auth** → **Settings** → **Platforms**
- OAuth provider redirect URLs (if using OAuth)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## License

MIT

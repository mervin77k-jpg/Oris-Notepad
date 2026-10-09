# Oris Notes

A private writing workspace with browser-local notes and a server-side AI provider gateway.

Features: rich-text editing, folders, tags, stars, search, templates, snapshots, recoverable trash, find/replace, focus mode, light/dark themes, adjustable typography, word goals, text/HTML export, browser print-to-PDF, text/Markdown import, JSON backup/restore, and AI writing tools.

AI providers: OpenAI, Groq, OpenRouter. API keys are entered by the user in Settings. Plaintext keys stay in page memory; optional persistence uses a password-encrypted AES-GCM vault with PBKDF2 SHA-256 (250,000 iterations). The server forwards a key only to its allowlisted provider and never persists it. API errors are mapped to safe messages. The route requires ChatGPT identity and validates request origin.

Notes and preferences live in localStorage, not a cloud database. Backups exclude keys. Browser storage clearing can delete notes; export regularly. Vault passwords cannot be recovered. Model IDs are editable, and Test connection loads the provider model catalog. No live provider requests were made during development.

Validation: `node node_modules/typescript/bin/tsc --noEmit`, `node scripts/check-ai.mjs`, and the Sites production build helper. API checks mock upstream requests and cover auth, origins, provider allowlisting, token limits, generation, connection testing, and error handling. Browser QA was not available in the authoring session.

API references: https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create , https://console.groq.com/docs/openai , https://openrouter.ai/docs/api/api-reference/chat/send-chat-completion-request

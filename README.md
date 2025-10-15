## 🏗️ Project Structure fidelpe-extractx

Créer une application web ou un module qui permet à l’utilisateur de téléverser un fichier (image, PDF, document, etc.), puis d’extraire automatiquement le texte qu’il contient, de le simplifier linguistiquement (résumé, reformulation, ou traduction claire), et enfin de copier facilement le texte obtenu.

````
fidelpe-extractx/
│
├─ app/                          # Next.js App Router (frontend only)
│  ├─ layout.tsx                 # Global layout (Navbar, Footer, etc.)
│  ├─ page.tsx                   # Home page
│  │
│  ├─ upload/                    # Upload page
│  │   └─ page.tsx
│  ├─ extract/                   # Text extraction flow
│  │   └─ page.tsx
│  ├─ simplify/                  # Simplify or summarize text
│  │   └─ page.tsx
│  ├─ api/                       # Next.js serverless API routes (frontend only)
│  │   ├─ extract/route.ts
│  │   └─ simplify/route.ts
│  └─ globals.css
│
├─ components/
│  ├─ layout/
│  │   ├─ Navbar.tsx
│  │   └─ Footer.tsx
│  ├─ common/
│  │   ├─ Button.tsx
│  │   ├─ Loader.tsx
│  │   ├─ FileInput.tsx
│  │   └─ Alert.tsx
│  ├─ upload/
│  │   ├─ FileUploader.tsx
│  │   └─ UploadPreview.tsx
│  ├─ extract/
│  │   ├─ ExtractArea.tsx
│  │   └─ TextDisplay.tsx
│  └─ simplify/
│      └─ SimplifyPanel.tsx
│
├─ hooks/
│  ├─ useFileUpload.ts           # Handles file input logic
│  ├─ useTextExtract.ts          # Handles text extraction call
│  ├─ useSimplify.ts             # Handles simplification call
│  └─ useToast.ts                # Notifications
│
├─ services/                     # API logic layer
│  ├─ apiClient.ts               # Axios / fetch wrapper
│  ├─ extractService.ts          # Handles /api/extract
│  └─ simplifyService.ts         # Handles /api/simplify
│
├─ lib/
│  ├─ helpers.ts                 # Utilities (clean text, format, etc.)
│  ├─ constants.ts               # Global constants
│  └─ types.ts                   # TS interfaces (TextData, FileInfo, etc.)
│
├─ store/                        # Global state (optional - Zustand)
│  └─ useAppStore.ts
│
├─ public/
│   └─ logo.png
│
├─ styles/
│   └─ globals.css
│
├─ .env.local                    # Env vars (e.g., OPENAI_API_KEY)
├─ package.json
├─ tsconfig.json
└─ tailwind.config.js
````
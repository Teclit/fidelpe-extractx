// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FidelpeExtractX",
    description: "Extract and simplify text from images or documents easily.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-100">
        <main className="max-w-3xl mx-auto py-10 px-4">{children}</main>
        </body>
        </html>
    );
}

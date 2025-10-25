// src/app/layout.tsx
import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import localFont from 'next/font/local';


const waldba = localFont({
    src: './fonts/RaeyType/WaldbaYigezuBisratGothic-Regular.ttf',
    display: 'swap',
});


export const metadata: Metadata = {
    title: "FidelpeExtractX - Simplify texts",
    description: "Simple tool to extract and simplify texts, designed for people who are not comfortable with digital technology."
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={waldba.className}>
        <body className="app-container">
        <main className="card">{children}</main>
        </body>
        </html>
    );
}
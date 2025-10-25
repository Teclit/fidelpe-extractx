// src/app/layout.tsx
import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import localFont from 'next/font/local';


const waldba = localFont({
    src: [
        {path: './fonts/RaeyType/Brana-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/Geez-Manuscript-Zemen-COLR.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/gfzemenu.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaFantuwua-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaHiwua-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaJiret-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaTint-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaWookianos-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaYebse-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaYigezuBisratGoffer-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaYigezuBisratGothic-Regular.ttf', weight: '400', style: 'normal'},
        {path: './fonts/RaeyType/WaldbaZelan-Regular.ttf', weight: '400', style: 'normal'},
    ],
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
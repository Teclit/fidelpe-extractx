// src/app/layout.tsx
import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import localFont from 'next/font/local';


// Polices individuelles pour utilisation séparée
const brana = localFont({
    src: './fonts/RaeyType/Brana-Regular.ttf',
    display: 'swap',
    variable: '--font-brana',
});

const geezManuscript = localFont({
    src: './fonts/RaeyType/Geez-Manuscript-Zemen-COLR.ttf',
    display: 'swap',
    variable: '--font-geez-manuscript',
});

const gfzemenu = localFont({
    src: './fonts/RaeyType/gfzemenu.ttf',
    display: 'swap',
    variable: '--font-gfzemenu',
});

const waldbaFantuwua = localFont({
    src: './fonts/RaeyType/WaldbaFantuwua-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-fantuwua',
});

const waldbaHiwua = localFont({
    src: './fonts/RaeyType/WaldbaHiwua-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-hiwua',
});

const waldbaJiret = localFont({
    src: './fonts/RaeyType/WaldbaJiret-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-jiret',
});

const waldbaTint = localFont({
    src: './fonts/RaeyType/WaldbaTint-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-tint',
});

const waldbaWookianos = localFont({
    src: './fonts/RaeyType/WaldbaWookianos-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-wookianos',
});

const waldbaYebse = localFont({
    src: './fonts/RaeyType/WaldbaYebse-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-yebse',
});

const waldbaGoffer = localFont({
    src: './fonts/RaeyType/WaldbaYigezuBisratGoffer-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-goffer',
});

const waldbaGothic = localFont({
    src: './fonts/RaeyType/WaldbaYigezuBisratGothic-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-gothic',
});

const waldbaZelan = localFont({
    src: './fonts/RaeyType/WaldbaZelan-Regular.ttf',
    display: 'swap',
    variable: '--font-waldba-zelan',
});

// Exporter les polices pour utilisation dans d'autres composants
export {
    brana,
    geezManuscript,
    gfzemenu,
    waldbaFantuwua,
    waldbaHiwua,
    waldbaJiret,
    waldbaTint,
    waldbaWookianos,
    waldbaYebse,
    waldbaGoffer,
    waldbaGothic,
    waldbaZelan
};


export const metadata: Metadata = {
    title: "FidelpeExtractX - Simplify texts",
    description: "Simple tool to extract and simplify texts, designed for people who are not comfortable with digital technology."
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${waldbaGothic.variable} ${brana.variable} ${geezManuscript.variable} ${gfzemenu.variable} ${waldbaFantuwua.variable} ${waldbaHiwua.variable} ${waldbaJiret.variable} ${waldbaTint.variable} ${waldbaWookianos.variable} ${waldbaYebse.variable} ${waldbaGoffer.variable} ${waldbaZelan.variable} ${waldbaGothic.className}`}>
        <body className="app-container">
        <main className="card">{children}</main>
        </body>
        </html>
    );
}
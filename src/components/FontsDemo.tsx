'use client';

import React, { useMemo, useState } from 'react';

/**
 * Composant de démonstration pour toutes les polices disponibles
 * Utilisez ce composant pour visualiser et tester toutes les polices
 */
export default function FontsDemo() {
    const sampleText = "ፊደልፐ ምስ ጽሑፋት - Sample Text 123";

    const groups: { group: string; fonts: { name: string; className: string }[] }[] = useMemo(() => [
        {
            group: 'RaeyType',
            fonts: [
                { name: 'Brana', className: 'font-brana' },
                { name: 'Geez Manuscript', className: 'font-geez-manuscript' },
                { name: 'GF Zemenu', className: 'font-gfzemenu' },
                { name: 'Geez Fantuwua', className: 'font-geez-fantuwua' },
                { name: 'Geez Hiwua', className: 'font-geez-hiwua' },
                { name: 'Geez Jiret', className: 'font-geez-jiret' },
                { name: 'Geez Tint', className: 'font-geez-tint' },
                { name: 'Geez Wookianos', className: 'font-geez-wookianos' },
                { name: 'Geez Yebse', className: 'font-geez-yebse' },
                { name: 'Geez Goffer', className: 'font-geez-goffer' },
                { name: 'Geez Gothic', className: 'font-geez-gothic' },
                { name: 'Geez Zelan', className: 'font-geez-zelan' },
            ],
        },
        {
            group: 'Google',
            fonts: [
                { name: 'Agbalumo', className: 'font-agbalumo' },
                { name: 'Menbere', className: 'font-menbere' },
            ],
        },
        {
            group: 'Noto',
            fonts: [
                { name: 'Noto Sans Ethiopic', className: 'font-noto-sans-ethiopic' },
                { name: 'Noto Serif Ethiopic', className: 'font-noto-serif-ethiopic' },
            ],
        },
        {
            group: 'SIL',
            fonts: [
                { name: 'Abyssinica SIL', className: 'font-abyssinica-sil' },
                { name: 'Abyssinica SIL Connected', className: 'font-abyssinica-sil-connected' },
            ],
        },
        {
            group: 'Wazéma',
            fonts: [
                { name: 'Addis Abeba Unicode', className: 'font-addis-abeba-unicode' },
                { name: 'Desta Unicode', className: 'font-desta-unicode' },
                { name: 'Tesfa Unicode', className: 'font-tesfa-unicode' },
            ],
        },
        {
            group: 'SurGraphics',
            fonts: [
                { name: 'SurGraphics Regular', className: 'font-surgraphics' },
            ],
        },
        {
            group: 'TypeHabesha',
            fonts: [
                { name: 'Loga', className: 'font-loga' },
                { name: 'Loga Display', className: 'font-loga-display' },
                { name: 'Habesha Serif Distort', className: 'font-habesha-serif-distort' },
                { name: 'Zibriqriq', className: 'font-zibriqriq' },
            ],
        },
        {
            group: 'AnbassaDesign',
            fonts: [
                { name: 'Adwa', className: 'font-adwa' },
                { name: 'Adwa Sans Serif', className: 'font-adwa-sans-serif' },
                { name: 'Entoto', className: 'font-entoto' },
                { name: 'Godana', className: 'font-godana' },
                { name: 'Meaza', className: 'font-meaza' },
                { name: 'Neteru', className: 'font-neteru' },
                { name: 'Shiromeda', className: 'font-shiromeda' },
                { name: 'Shiromeda Serif', className: 'font-shiromeda-serif' },
                { name: 'Tayitu', className: 'font-tayitu' },
            ],
        },
        {
            group: 'HaaHu',
            fonts: [
                { name: 'ETH_B_GOFA', className: 'font-eth-gofa' },
            ],
        },
        {
            group: 'HalwoteHareg',
            fonts: [
                { name: 'HH Lemd Mono', className: 'font-hh-lemd-mono' },
            ],
        },
        {
            group: 'Qedron',
            fonts: [
                { name: 'Kiros', className: 'font-kiros' },
            ],
        },
        {
            group: 'GeezFonts',
            fonts: [
                { name: 'Geez Pixels 2', className: 'font-geez-pixels-2' },
                { name: 'GeezDigital V1', className: 'font-geez-digital-v1' },
            ],
        },
        {
            group: 'RoadToEthiopia',
            fonts: [
                { name: 'Addis', className: 'font-addis' },
                { name: 'Dire Dawa', className: 'font-dire-dawa' },
            ],
        },
        {
            group: 'EducationalFonts',
            fonts: [
                { name: 'Geez Handwriting', className: 'font-geez-handwriting' },
            ],
        },
        {
            group: 'BlackFoundry',
            fonts: [
                { name: 'Abba Garima', className: 'font-abba-garima' },
            ],
        },
        {
            group: 'Fixedsys',
            fonts: [
                { name: 'Fixedsys', className: 'font-fixedsys' },
            ],
        },
        {
            group: 'TITUS',
            fonts: [
                { name: 'Cyberbit Basic', className: 'font-titus-cyberbit-basic' },
            ],
        },
        {
            group: 'YonathanSeyoum',
            fonts: [
                { name: 'Habesha Typewriter', className: 'font-habesha-typewriter' },
                { name: 'Habesha Stencil', className: 'font-habesha-stencil' },
                { name: 'Habesha Pixels', className: 'font-habesha-pixels' },
                { name: 'Habesha Blocks', className: 'font-habesha-blocks' },
            ],
        },
        {
            group: 'ZamranStudio',
            fonts: [
                { name: 'Addis Sans', className: 'font-addis-sans' },
                { name: 'Jegena Zamaric', className: 'font-jegena-zamaric' },
                { name: 'Jegena Title Zamaric', className: 'font-jegena-title-zamaric' },
                { name: 'Zamaric', className: 'font-zamaric' },
            ],
        },
        {
            group: 'AdilCreative',
            fonts: [
                { name: 'Adil', className: 'font-adil' },
                { name: 'Selam', className: 'font-selam' },
            ],
        },
        {
            group: 'DotBoxDesignStudio',
            fonts: [
                { name: 'Ketefa', className: 'font-ketefa' },
                { name: 'Semayawi', className: 'font-semayawi' },
            ],
        },
        {
            group: 'MetaAppz',
            fonts: [
                { name: 'Chiret', className: 'font-chiret' },
                { name: 'Seat', className: 'font-seat' },
                { name: 'Tera', className: 'font-tera' },
            ],
        },
        {
            group: 'Mulat',
            fonts: [
                { name: 'Mulat Abay', className: 'font-mulat-abay' },
                { name: 'Mulat Addis', className: 'font-mulat-addis' },
                { name: 'Mulat Ahmed', className: 'font-mulat-ahmed' },
                { name: 'Mulat Asmara', className: 'font-mulat-asmara' },
                { name: 'Mulat Awash', className: 'font-mulat-awash' },
            ],
        },
        {
            group: 'GNU',
            fonts: [
                { name: 'FreeSerif', className: 'font-free-serif' },
            ],
        },
        {
            group: 'Senamirmir',
            fonts: [
                { name: 'Ethiopic Abay', className: 'font-ethiopic-abay' },
                { name: 'Ethiopic Lessan', className: 'font-ethiopic-lessan' },
                { name: 'Ethiopic Le Tewahedo', className: 'font-ethiopic-le-tewahedo' },
                { name: 'Ethiopic Sadiss', className: 'font-ethiopic-sadiss' },
            ],
        },
    ], []);

    // Accordion state: collapsed by default for compact view
    const initialOpen = useMemo(() => Object.fromEntries(groups.map(g => [g.group, false])), [groups]);
    const [open, setOpen] = useState<Record<string, boolean>>(initialOpen);

    const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="mb-5 text-center font-sans">
            Démonstration de toutes les polices
            </h1>

            {groups.map(({ group, fonts }) => {
                const isOpen = open[group];
                const count = fonts.length;
                return (
                    <div key={group} className="mb-4 border border-gray-200 bg-white rounded-lg shadow-sm">
                        <button
                            onClick={() => toggle(group)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-3 p-3 bg-transparent border-none cursor-pointer"
                        >
                            <div className="flex items-center gap-2.5 px-2 py-1 rounded">
                                <span
                                    aria-hidden
                                    className={`inline-block transition-transform duration-150 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                                >
                                    ▸
                                </span>
                                <span className="font-sans text-base text-gray-900">{group}</span>
                            </div>
                            <span className="font-sans text-sm text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                                {count}
                            </span>
                        </button>

                        {isOpen && (
                            <div className="p-3 pt-0 border-t border-gray-100">
                                <div className="grid grid-cols-2 gap-3">
                                    {fonts.map((font) => (
                                        <div
                                            key={font.className}
                                            className="p-3 border border-gray-200 rounded-lg bg-white  shadow-sm"
                                        >
                                            <div className="text-xs text-gray-600 mb-1 font-sans flex justify-between gap-2">
                                                <span>{font.name}</span>
                                                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                                                    .{font.className}
                                                </code>
                                            </div>
                                            <div
                                                className={`${font.className} text-xl leading-6`}
                                            >
                                                {sampleText}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}


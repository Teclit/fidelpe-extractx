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
        <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1.25rem', textAlign: 'center', fontFamily: 'system-ui' }}>
                Démonstration de toutes les polices
            </h1>

            {groups.map(({ group, fonts }) => {
                const isOpen = open[group];
                const count = fonts.length;
                return (
                    <div key={group} style={{ marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: 10, background: '#fff' }}>
                        <button
                            onClick={() => toggle(group)}
                            aria-expanded={isOpen}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.75rem',
                                padding: '0.75rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span
                                    aria-hidden
                                    style={{
                                        display: 'inline-block',
                                        transform: `rotate(${isOpen ? 90 : 0}deg)`,
                                        transition: 'transform 150ms ease'
                                    }}
                                >
                                    ▸
                                </span>
                                <span style={{ fontFamily: 'system-ui', fontSize: '1rem', color: '#111827' }}>{group}</span>
                            </div>
                            <span style={{
                                fontFamily: 'system-ui',
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                background: '#f3f4f6',
                                border: '1px solid #e5e7eb',
                                padding: '0.125rem 0.5rem',
                                borderRadius: 999
                            }}>
                                {count}
                            </span>
                        </button>

                        {isOpen && (
                            <div style={{
                                padding: '0.75rem 1rem 1rem',
                                borderTop: '1px solid #f3f4f6'
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gap: '0.75rem',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
                                }}>
                                    {fonts.map((font) => (
                                        <div
                                            key={font.className}
                                            style={{
                                                padding: '0.75rem',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                background: '#fff'
                                            }}
                                        >
                                            <div style={{
                                                fontSize: '0.8125rem',
                                                color: '#666',
                                                marginBottom: '0.25rem',
                                                fontFamily: 'system-ui',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                gap: '0.5rem'
                                            }}>
                                                <span>{font.name}</span>
                                                <code style={{
                                                    background: '#f5f5f5',
                                                    padding: '0.125rem 0.375rem',
                                                    borderRadius: '3px',
                                                    fontSize: '0.75rem'
                                                }}>
                                                    .{font.className}
                                                </code>
                                            </div>
                                            <div
                                                className={font.className}
                                                style={{
                                                    fontSize: '1.25rem',
                                                    lineHeight: '1.5'
                                                }}
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


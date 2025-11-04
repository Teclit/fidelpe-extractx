// Auto-loaded additional fonts for global usage
// Note: We register one representative file per family (usually Regular)
// to expose a CSS variable you can use via `font-family: var(--font-*)`.

import localFont from 'next/font/local';

// Google
export const agbalumo = localFont({
  src: './Google/Agbalumo-Regular.ttf',
  display: 'swap',
  variable: '--font-agbalumo',
});
export const menbere = localFont({
  src: [{ path: './Google/Menbere-VariableFont_wght.ttf', style: 'normal', weight: '100 900' }],
  display: 'swap',
  variable: '--font-menbere',
});

// Noto
export const notoSansEthiopic = localFont({
  src: './Noto/NotoSansEthiopic-Regular.ttf',
  display: 'swap',
  variable: '--font-noto-sans-ethiopic',
});
export const notoSerifEthiopic = localFont({
  src: './Noto/NotoSerifEthiopic-Regular.ttf',
  display: 'swap',
  variable: '--font-noto-serif-ethiopic',
});

// SIL
export const abyssinicaSIL = localFont({
  src: './SIL/AbyssinicaSIL-Regular.ttf',
  display: 'swap',
  variable: '--font-abyssinica-sil',
});
export const abyssinicaSILConnected = localFont({
  src: './SIL/AbyssinicaSIL-Connected-Regular.ttf',
  display: 'swap',
  variable: '--font-abyssinica-sil-connected',
});

// Wazéma
export const addisAbebaUnicode = localFont({
  src: './Wazéma/A0AddisAbebaUnicode_20030827.ttf',
  display: 'swap',
  variable: '--font-addis-abeba-unicode',
});
export const destaUnicode = localFont({
  src: './Wazéma/A0DestaUnicode_20030827.ttf',
  display: 'swap',
  variable: '--font-desta-unicode',
});
export const tesfaUnicode = localFont({
  src: './Wazéma/A0TesfaUnicode_20030720.ttf',
  display: 'swap',
  variable: '--font-tesfa-unicode',
});

// SurGraphics
export const surgraphics = localFont({
  src: './SurGraphics/SurGraphics Regular.ttf',
  display: 'swap',
  variable: '--font-surgraphics',
});

// TypeHabesha
export const loga = localFont({
  src: './TypeHabesha/Loga Regular.ttf',
  display: 'swap',
  variable: '--font-loga',
});
export const logaDisplay = localFont({
  src: './TypeHabesha/LogaDisplay-Regular.ttf',
  display: 'swap',
  variable: '--font-loga-display',
});
export const habeshaSerifDistort = localFont({
  src: './TypeHabesha/Habesha Serif Distort.ttf',
  display: 'swap',
  variable: '--font-habesha-serif-distort',
});
export const zibriqriq = localFont({
  src: './TypeHabesha/Zibriqriq - ዝብርቅርቅ.ttf',
  display: 'swap',
  variable: '--font-zibriqriq',
});

// AnbassaDesign
export const adwa = localFont({
  src: './AnbassaDesign/Adwa-Regular.ttf',
  display: 'swap',
  variable: '--font-adwa',
});
export const adwaSansSerif = localFont({
  src: './AnbassaDesign/AdwaSansSerif-Regular.ttf',
  display: 'swap',
  variable: '--font-adwa-sans-serif',
});
export const entoto = localFont({
  src: './AnbassaDesign/Entoto.ttf',
  display: 'swap',
  variable: '--font-entoto',
});
export const godana = localFont({
  src: './AnbassaDesign/Godana-Regular.ttf',
  display: 'swap',
  variable: '--font-godana',
});
export const meaza = localFont({
  src: './AnbassaDesign/Meaza.ttf',
  display: 'swap',
  variable: '--font-meaza',
});
export const neteru = localFont({
  src: './AnbassaDesign/Neteru.ttf',
  display: 'swap',
  variable: '--font-neteru',
});
export const shiromeda = localFont({
  src: './AnbassaDesign/Shiromeda-Regular.ttf',
  display: 'swap',
  variable: '--font-shiromeda',
});
export const shiromedaSerif = localFont({
  src: './AnbassaDesign/ShiromedaSerif-Regular.ttf',
  display: 'swap',
  variable: '--font-shiromeda-serif',
});
export const tayitu = localFont({
  src: './AnbassaDesign/Tayitu.ttf',
  display: 'swap',
  variable: '--font-tayitu',
});

// HaaHu
export const ethGofa = localFont({
  src: './HaaHu/ETH_B_GOFA.ttf',
  display: 'swap',
  variable: '--font-eth-gofa',
});

// HalwoteHareg
export const hhLemdMono = localFont({
  src: './HalwoteHareg/HH Lemd Mono-Regular.otf',
  display: 'swap',
  variable: '--font-hh-lemd-mono',
});

// Qedron
export const kiros = localFont({
  src: './Qedron/kiros.ttf',
  display: 'swap',
  variable: '--font-kiros',
});

// GeezFonts
export const geezPixels2 = localFont({
  src: './GeezFonts/Geez Pixels 2.ttf',
  display: 'swap',
  variable: '--font-geez-pixels-2',
});
export const geezDigital = localFont({
  src: './GeezFonts/GeezDigital_V1.ttf',
  display: 'swap',
  variable: '--font-geez-digital-v1',
});

// RoadToEthiopia
export const addis = localFont({
  src: './RoadToEthiopia/Addis.ttf',
  display: 'swap',
  variable: '--font-addis',
});
export const direDawa = localFont({
  src: './RoadToEthiopia/Dire_Dawa.ttf',
  display: 'swap',
  variable: '--font-dire-dawa',
});

// EducationalFonts
export const geezHandwriting = localFont({
  src: './EducationalFonts/GeezHandwriting.ttf',
  display: 'swap',
  variable: '--font-geez-handwriting',
});

// BlackFoundry
export const abbaGarima = localFont({
  src: './BlackFoundry/AbbaGarima-Regular.ttf',
  display: 'swap',
  variable: '--font-abba-garima',
});

// Fixedsys
export const fixedsys = localFont({
  src: './Fixedsys/FSEX302.ttf',
  display: 'swap',
  variable: '--font-fixedsys',
});

// TITUS
export const titusCyberbitBasic = localFont({
  src: './TITUS/TITUS Cyberbit Basic Regular.ttf',
  display: 'swap',
  variable: '--font-titus-cyberbit-basic',
});

// YonathanSeyoum
export const habeshaTypewriter = localFont({
  src: './YonathanSeyoum/ahabeshastypewriter-regular.ttf',
  display: 'swap',
  variable: '--font-habesha-typewriter',
});
export const habeshaStencil = localFont({
  src: './YonathanSeyoum/Habesha STENCIL.ttf',
  display: 'swap',
  variable: '--font-habesha-stencil',
});
export const habeshaPixels = localFont({
  src: './YonathanSeyoum/HABESHAPIXELS.ttf',
  display: 'swap',
  variable: '--font-habesha-pixels',
});
export const habeshaBlocks = localFont({
  src: './YonathanSeyoum/Habesha_Blocks.ttf',
  display: 'swap',
  variable: '--font-habesha-blocks',
});

// ZamranStudio
export const addisSans = localFont({
  src: './ZamranStudio/Addis-Sans.ttf',
  display: 'swap',
  variable: '--font-addis-sans',
});
export const jegenaZamaric = localFont({
  src: './ZamranStudio/Jegena-zamaric.ttf',
  display: 'swap',
  variable: '--font-jegena-zamaric',
});
export const jegenaTitleZamaric = localFont({
  src: './ZamranStudio/JegenaTitle-zamaric.ttf',
  display: 'swap',
  variable: '--font-jegena-title-zamaric',
});
export const zamaric = localFont({
  src: './ZamranStudio/zamaric.ttf',
  display: 'swap',
  variable: '--font-zamaric',
});

// AdilCreative
export const adil = localFont({
  src: './AdilCreative/ADIL-Regula.otf',
  display: 'swap',
  variable: '--font-adil',
});
export const selam = localFont({
  src: './AdilCreative/Selam Regular.otf',
  display: 'swap',
  variable: '--font-selam',
});

// DotBoxDesignStudio
export const ketefa = localFont({
  src: './DotBoxDesignStudio/ketefa.ttf',
  display: 'swap',
  variable: '--font-ketefa',
});
export const semayawi = localFont({
  src: './DotBoxDesignStudio/Semayawi.ttf',
  display: 'swap',
  variable: '--font-semayawi',
});

// MetaAppz
export const chiret = localFont({
  src: './MetaAppz/Chiret-Regular.ttf',
  display: 'swap',
  variable: '--font-chiret',
});
export const seat = localFont({
  src: './MetaAppz/Seat-Regular.ttf',
  display: 'swap',
  variable: '--font-seat',
});
export const tera = localFont({
  src: './MetaAppz/Tera-Regular.ttf',
  display: 'swap',
  variable: '--font-tera',
});

// Mulat
export const mulatAbay = localFont({
  src: './Mulat/MulatAbay-Regular.ttf',
  display: 'swap',
  variable: '--font-mulat-abay',
});
export const mulatAddis = localFont({
  src: './Mulat/MulatAddis-Regular.ttf',
  display: 'swap',
  variable: '--font-mulat-addis',
});
export const mulatAhmed = localFont({
  src: './Mulat/MulatAhmed-Regular.ttf',
  display: 'swap',
  variable: '--font-mulat-ahmed',
});
export const mulatAsmara = localFont({
  src: './Mulat/MulatAsmara-Regular.ttf',
  display: 'swap',
  variable: '--font-mulat-asmara',
});
export const mulatAwash = localFont({
  src: './Mulat/MulatAwash-Regular.ttf',
  display: 'swap',
  variable: '--font-mulat-awash',
});

// GNU
export const freeSerif = localFont({
  src: './GNU/FreeSerif.otf',
  display: 'swap',
  variable: '--font-free-serif',
});

// Senamirmir
export const ethiopicAbay = localFont({
  src: './Senamirmir/EthiopicAbay-Regular.ttf',
  display: 'swap',
  variable: '--font-ethiopic-abay',
});
export const ethiopicLessan = localFont({
  src: './Senamirmir/EthiopicLessan-Regular.ttf',
  display: 'swap',
  variable: '--font-ethiopic-lessan',
});
export const ethiopicLeTewahedo = localFont({
  src: './Senamirmir/EthiopicLeTewahedo-Regular.ttf',
  display: 'swap',
  variable: '--font-ethiopic-le-tewahedo',
});
export const ethiopicSadiss = localFont({
  src: './Senamirmir/EthiopicSadiss-Regular.ttf',
  display: 'swap',
  variable: '--font-ethiopic-sadiss',
});

// Aggregate list of variable classNames for easy injection
export const fontVars: string[] = [
  agbalumo.variable,
  menbere.variable,
  notoSansEthiopic.variable,
  notoSerifEthiopic.variable,
  abyssinicaSIL.variable,
  abyssinicaSILConnected.variable,
  addisAbebaUnicode.variable,
  destaUnicode.variable,
  tesfaUnicode.variable,
  surgraphics.variable,
  loga.variable,
  logaDisplay.variable,
  habeshaSerifDistort.variable,
  zibriqriq.variable,
  adwa.variable,
  adwaSansSerif.variable,
  entoto.variable,
  godana.variable,
  meaza.variable,
  neteru.variable,
  shiromeda.variable,
  shiromedaSerif.variable,
  tayitu.variable,
  ethGofa.variable,
  hhLemdMono.variable,
  kiros.variable,
  geezPixels2.variable,
  geezDigital.variable,
  addis.variable,
  direDawa.variable,
  geezHandwriting.variable,
  abbaGarima.variable,
  fixedsys.variable,
  titusCyberbitBasic.variable,
  habeshaTypewriter.variable,
  habeshaStencil.variable,
  habeshaPixels.variable,
  habeshaBlocks.variable,
  addisSans.variable,
  jegenaZamaric.variable,
  jegenaTitleZamaric.variable,
  zamaric.variable,
  adil.variable,
  selam.variable,
  ketefa.variable,
  semayawi.variable,
  chiret.variable,
  seat.variable,
  tera.variable,
  mulatAbay.variable,
  mulatAddis.variable,
  mulatAhmed.variable,
  mulatAsmara.variable,
  mulatAwash.variable,
  freeSerif.variable,
  ethiopicAbay.variable,
  ethiopicLessan.variable,
  ethiopicLeTewahedo.variable,
  ethiopicSadiss.variable,
];

// Exemple d'utilisation des différentes polices
// Vous pouvez copier ces exemples dans votre page.tsx

import { brana, geezManuscript, waldbaGothic, waldbaYebse } from './layout';

// Méthode 1 : Utiliser les classes CSS
<>
    // Méthode 1 : Utiliser les classes CSS
    <h1 className="font-brana">ፊደልፐ ምስ ጽሑፋት</h1><h2 className="font-geez-manuscript">ጽሑፋት በጊዝ መጽሐፍ</h2><h3
    className="font-waldba-gothic">ወልድባ ጎቲክ</h3>
    // Méthode 2 : Utiliser className directement depuis l'import
    <h1 className={brana.className}>ፊደልፐ ምስ ጽሑፋት</h1><h2 className={geezManuscript.className}>ጽሑፋት በጊዝ መጽሐፍ</h2><h3
    className={waldbaGothic.className}>ወልድባ ጎቲክ</h3>
    // Méthode 3 : Utiliser style inline avec les variables CSS
    <h1 style={{fontFamily: 'var(--font-brana)'}}>ፊደልፐ ምስ ጽሑፋት</h1><h2
    style={{fontFamily: 'var(--font-geez-manuscript)'}}>ጽሑፋት በጊዝ መጽሐፍ</h2>
    // Méthode 4 : Combiner avec Tailwind ou d'autres classes
    <h1 className="font-waldba-yebse text-2xl font-bold">ወልድባ የብሴ</h1>
</>

// Liste complète des classes CSS disponibles :
// - font-brana
// - font-geez-manuscript
// - font-gfzemenu
// - font-waldba-fantuwua
// - font-waldba-hiwua
// - font-waldba-jiret
// - font-waldba-tint
// - font-waldba-wookianos
// - font-waldba-yebse
// - font-waldba-goffer
// - font-waldba-gothic (police par défaut)
// - font-waldba-zelan


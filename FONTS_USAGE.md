# Guide d'utilisation des polices

Toutes les polices du répertoire RaeyType sont maintenant disponibles séparément dans votre application.

## Polices disponibles

1. **Brana** - `--font-brana`
2. **Geez Manuscript** - `--font-geez-manuscript`
3. **GF Zemenu** - `--font-gfzemenu`
4. **Waldba Fantuwua** - `--font-waldba-fantuwua`
5. **Waldba Hiwua** - `--font-waldba-hiwua`
6. **Waldba Jiret** - `--font-waldba-jiret`
7. **Waldba Tint** - `--font-waldba-tint`
8. **Waldba Wookianos** - `--font-waldba-wookianos`
9. **Waldba Yebse** - `--font-waldba-yebse`
10. **Waldba Goffer** - `--font-waldba-goffer`
11. **Waldba Gothic** - `--font-waldba-gothic` (police par défaut)
12. **Waldba Zelan** - `--font-waldba-zelan`

## Comment utiliser les polices

### Méthode 1 : Avec CSS (via les variables CSS)

Dans votre fichier `globals.css` :

```css
.font-brana {
    font-family: var(--font-brana);
}

.font-geez {
    font-family: var(--font-geez-manuscript);
}

.font-gfzemenu {
    font-family: var(--font-gfzemenu);
}

.font-waldba-fantuwua {
    font-family: var(--font-waldba-fantuwua);
}

/* etc. pour les autres polices */
```

Puis dans votre JSX :
```jsx
<h1 className="font-brana">ፊደልፐ ምስ ጽሑፋት</h1>
<p className="font-geez">Texte en Geez Manuscript</p>
```

### Méthode 2 : Directement dans le composant (Importation)

Dans `page.tsx`, vous pouvez importer les polices depuis le layout :

1. D'abord, exportez les polices dans `layout.tsx` :
```typescript
export { brana, geezManuscript, waldbaGothic, /* etc */ }
```

2. Puis utilisez-les dans `page.tsx` :
```jsx
import { brana, geezManuscript } from './layout';

<h1 className={brana.className}>Texte avec Brana</h1>
<h2 className={geezManuscript.className}>Texte avec Geez Manuscript</h2>
```

### Méthode 3 : Inline style avec les variables CSS

```jsx
<h1 style={{ fontFamily: 'var(--font-brana)' }}>
    ፊደልፐ ምስ ጽሑፋት
</h1>
```

## Police par défaut

La police **Waldba Gothic** est appliquée par défaut à toute l'application via `className={waldbaGothic.className}` sur l'élément `<html>`.


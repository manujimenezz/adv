# Design Assets – Advin Capital Web

Documentación de fotos, paleta de colores y tipografía usadas en la web.

---

## Fotos (Unsplash)

Todas las imágenes son de Unsplash. URLs completas con parámetros de tamaño usados en el proyecto.

| Uso | URL |
|-----|-----|
| **Hero Home** | `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop&q=80` |
| **Home – Capabilities (Hospitality)** | `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop` |
| **Home – Capabilities (Capital)** | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop` |
| **Home – Capabilities (Strategic)** | `https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop` |
| **Home – The Firm (hotel exterior)** | `https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=1000&fit=crop&q=80` |
| **Home – Market Coverage** | `https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=800&fit=crop&q=80` |
| **Firm – Luxury resort** | `https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&h=700&fit=crop&q=80` |
| **Firm – Operating model** | `https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=800&fit=crop&q=80` |
| **Advisory – Service 01 (hospitality)** | `https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=600&fit=crop&q=80` |
| **Advisory – Service 02 (capital)** | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop&q=80` |
| **Advisory – Service 03 (strategic)** | `https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&q=80` |
| **Advisory – CTA** | `https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=800&fit=crop&q=80` |
| **Approach – Strategic planning** | `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop&q=80` |
| **Contact – Identity block** | `https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=600&fit=crop&q=80` |

---

## Paleta de colores

Definida en `src/index.css` (Tailwind `@theme`).

| Nombre | Variable CSS | Hex |
|--------|--------------|-----|
| Navy | `--color-navy` | `#0a1628` |
| Navy Light | `--color-navy-light` | `#111d33` |
| Navy Lighter | `--color-navy-lighter` | `#1a2a45` |
| Slate Dark | `--color-slate-dark` | `#2a3a52` |
| Slate Mid | `--color-slate-mid` | `#64748b` |
| Cream | `--color-cream` | `#f5f0eb` |
| Warm White | `--color-warm-white` | `#fafaf9` |
| Gold | `--color-gold` | `#b8965a` |
| Gold Light | `--color-gold-light` | `#d4b97a` |
| Border | `--color-border` | `#e5e5e5` |

Clases Tailwind equivalentes: `navy`, `navy-light`, `navy-lighter`, `slate-dark`, `slate-mid`, `cream`, `warm-white`, `gold`, `gold-light`, `border`.

---

## Tipografía

- **Familia principal (heading y body):** Inter  
- **Fallbacks:** `'Helvetica Neue', 'Helvetica', 'Arial', system-ui, sans-serif`  
- **Variables CSS:** `--font-heading`, `--font-sans` (misma familia)  
- **Fuente cargada en** `index.html`: Google Fonts – Inter con pesos 300, 400, 500, 600, 700, 800, 900  
  - `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />`

Clases Tailwind: `font-heading` y `font-sans` usan esta familia.

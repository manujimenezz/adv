## Guía para modificar solo mobile sin afectar desktop

### Objetivo

Este documento explica cómo deben trabajar los agentes cuando quieran cambiar el comportamiento o el estilo **solo en mobile** manteniendo **intacto el diseño de desktop** en este proyecto React + Tailwind.

### Principios generales

- **Respeta los breakpoints existentes**:
  - Usa `md:hidden`, `md:flex`, etc. para separar claramente qué se ve en mobile (`< md`) y en desktop (`≥ md`).
  - No elimines ni modifiques clases que empiecen por `md:` si el cambio que buscas es únicamente móvil.
- **No mezcles comportamientos mobile y desktop en el mismo contenedor**:
  - Para cambios estructurales importantes (p. ej. overlays, menús, layouts), utiliza contenedores diferenciados:
    - Uno para desktop (`md:flex`, visible solo en `md+`).
    - Otro para mobile (`md:hidden`, visible solo en `< md`).
- **Prefiere utilidades responsive a CSS global**:
  - Siempre que sea posible, utiliza clases Tailwind responsive antes de añadir reglas nuevas a `index.css`.
  - Reserva CSS global para utilidades muy genéricas o para casos que Tailwind no pueda cubrir bien.

### Navbar: patrón concreto para mobile vs desktop

Archivo clave: `[src/components/Navbar.tsx](src/components/Navbar.tsx)`

- **Desktop**:
  - Bloque de enlaces de escritorio:
    - Contenedor con clases como:
      - ``className={`hidden md:flex ml-auto ...`}``
    - Todo lo que esté controlado por `md:flex` forma parte del layout de desktop.
  - **Regla**: si el cambio solo afecta a mobile, **no** toques este bloque.

- **Mobile**:
  - Toggle de menú (hamburguesa):
    - Dentro de un contenedor `className="flex items-center md:hidden"`.
  - Overlay del menú móvil:
    - Bloque dentro de `<AnimatePresence>` con condición `mobileOpen` y clase base:
      - `className="fixed inset-0 z-[60] bg-navy md:hidden flex flex-col justify-center min-h-[100svh] relative"`.
    - Todo lo que esté dentro de este `motion.div` y marcado con `md:hidden` pertenece **solo** a mobile.
  - **Regla**: para modificar el menú móvil (color, layout, full-screen, etc.), trabaja **dentro de este overlay** y dentro de otros elementos con `md:hidden`, sin tocar el bloque desktop.

### Cómo crear overlays full-screen solo en mobile

Cuando necesites un overlay (por ejemplo, un menú de navegación tipo modal) que ocupe toda la pantalla solo en mobile:

- **Contenedor exterior** (`motion.div` o `div`):
  - Base recomendada:
    - `className="fixed inset-0 z-[60] bg-navy md:hidden flex flex-col justify-center min-h-[100svh] relative"`
  - Puntos clave:
    - `fixed inset-0`: se superpone a toda la ventana, no empuja el contenido.
    - `z-[60]`: por encima de la navbar (`z-50`).
    - `bg-navy`: color azul uniforme coherente con el resto de la web.
    - `min-h-[100svh]`: garantiza altura de viewport en móviles modernos.
    - `md:hidden`: asegura que este overlay **solo** existe en mobile.

- **Contenedor interior** (contenido del overlay):
  - Base recomendada:
    - `className="flex-1 flex flex-col items-center justify-center px-10 w-full h-full"`
  - Puntos clave:
    - `flex-1 w-full h-full`: ocupa todo el espacio del overlay.
    - `items-center justify-center`: centra el contenido (p. ej. lista de enlaces).

- **Cierre del overlay**:
  - El `onClick` del overlay exterior debe cerrar el menú.
  - El contenedor interior debe llamar a `e.stopPropagation()` en su `onClick` para que los clics en el menú **no** lo cierren accidentalmente.

### Estilos de texto y colores en mobile

- Para menús sobre fondo azul (`bg-navy`):
  - Usa texto blanco o blanco desaturado:
    - Activo: `text-white`
    - Inactivo: `text-white/70 hover:text-white`
- Escalas de tamaño de texto recomendadas en mobile:
  - Títulos/links principales: `text-2xl` o `text-3xl`, `font-semibold` o `font-bold`.

### Uso de CSS global para mobile

Archivo: `[src/index.css](src/index.css)`

- Existe un bloque **exclusivo** para mobile:
  - ```css
    @media (max-width: 767px) {
      html {
        overflow-x: hidden;
      }
    }
    ```
- Regla:
  - Solo añade aquí estilos **muy genéricos** de comportamiento (scroll, overflow, etc.).
  - Si tu cambio puede expresarse con clases Tailwind responsive, **hazlo en los componentes**, no en este CSS.

### Checklist antes de dar por bueno un cambio solo-mobile

- **1. Desktop intacto**:
  - En viewport `md` o superior:
    - La navbar se ve igual que antes.
    - No han cambiado tamaños, colores ni espaciados que no sean específicos de mobile.
- **2. Mobile overlay correcto**:
  - El menú u overlay cubre toda la pantalla en alto y ancho.
  - El fondo azul (`bg-navy`) se ve uniforme.
  - El texto se lee claramente (blanco / blanco desaturado).
- **3. Comportamiento modal**:
  - El contenido de fondo no se desplaza mientras el overlay está abierto (scroll del `body` bloqueado, ya implementado en `Navbar.tsx`).
  - Tocar fuera del contenido del overlay lo cierra; tocar dentro permite interactuar normalmente.
- **4. Breakpoints correctos**:
  - Has usado `md:hidden` / `md:flex` (u otras variantes `md:`) para limitar los cambios a mobile.
  - No has modificado clases desktop compartidas si el cambio solo afecta a mobile.

Si todos los puntos de este checklist se cumplen, el cambio está bien aislado en mobile y no debería afectar a la experiencia de escritorio.


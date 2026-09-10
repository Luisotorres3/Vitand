# Vitand

Primera landing comercial de Vitand, creada con React, TypeScript, Vite y Tailwind CSS. Es una presentación del proyecto B2B, sin backend ni comercio electrónico.

## Ejecutar

Requisitos: Node.js 20.19+ y npm.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:5173. Para generar la versión de producción:

```sh
npm run build
npm run preview
```

`dist/` contiene la web estática lista para alojar. No necesita variables de entorno.

## Dirección visual

Marfil, tinta verde oscura, acentos lima y packaging conceptual con detalles foil. Wordmark tipográfico provisional; no es un logotipo definitivo. Los gráficos están realizados con CSS y SVG local: no se cargan fotografías, tipografías ni scripts de terceros.

La referencia https://www.tcgbestia.com/ se estudió por su recorrido comercial: propuesta B2B, ventajas, selección de productos y acceso profesional. Vitand utiliza composición, paleta, textos y gráficos propios. No se reutilizan sus assets ni sus afirmaciones comerciales.

## Estructura

- `src/App.tsx`: composición de la landing y estado del modal.
- `src/components/`: header, hero, propuesta de valor, productos, audiencia, origen, proceso B2B, CTA, FAQ, footer y elementos compartidos.
- `src/data.ts`: productos ilustrativos, FAQ, ventajas y navegación.
- `src/styles.css`: sistema visual, packaging CSS, breakpoints y movimiento reducido.
- `public/`: favicon tipográfico temporal y futuras imágenes locales.
- `tests/landing.spec.ts`: comprobaciones de navegación, interacciones, accesibilidad y responsive.

Para sustituir un placeholder, añadir una fotografía autorizada a `public/products/` y definir `image: '/products/archivo.webp'` en el objeto correspondiente de `src/data.ts`. Actualizar también nombre, idioma, tipo y textos ilustrativos cuando existan referencias confirmadas. El hero usa el componente `ProductArt`, que puede reemplazarse por fotografías de producto.

## Comportamiento actual

- Navegación por anclas, header sticky y menú móvil con cierre por Escape.
- Filtros locales de Japón/Corea y FAQ accesible.
- Diálogos nativos con foco contenido, cierre por Escape y devolución del foco.
- CTA B2B, login y contacto explican que la funcionalidad está en preparación. No hay formularios, envío de datos ni confirmaciones ficticias.
- Se respeta `prefers-reduced-motion` y se incluye enlace para saltar al contenido.
- Los enlaces legales abren información provisional, no documentos legales definitivos.

Antes de activar un servicio comercial deberán incorporarse datos legales y canales de contacto reales, fotografías autorizadas y condiciones confirmadas. La landing no afirma stock, plazos, proveedores, precios, testimonios ni certificaciones.

El frontend puede crecer incorporando rutas y servicios posteriormente. No se han creado `/products`, `/login`, `/register`, `/b2b`, `/account`, `/cart` ni `/checkout`.

## Verificación

```sh
npm run test:e2e
```

La configuración usa Microsoft Edge instalado (`channel: 'msedge'`). Para otro entorno puede sustituirse por Chromium y ejecutar `npx playwright install chromium`. Playwright inicia Vite automáticamente si no está disponible.

Se comprueban anchos 1440, 1024, 768, 390 y 320 px, ausencia de desbordamiento horizontal, errores de consola, filtros, FAQ, menú móvil y foco del modal. axe-core revisa reglas WCAG A/AA; este control automatizado no sustituye una auditoría completa. Las capturas se guardan en `artifacts/`.

## GitHub Pages

Repositorio: https://github.com/Luisotorres3/Vitand

Web: https://luisotorres3.github.io/Vitand/

El workflow `.github/workflows/deploy.yml` instala las dependencias, comprueba TypeScript y publica `dist/` mediante GitHub Actions al subir cambios a `main`. También puede ejecutarse manualmente desde Actions. Pages debe utilizar GitHub Actions como origen.

La compilación de Pages usa `npm run build -- --mode github-pages`, que establece la base `/Vitand/`. El desarrollo local y la compilación normal conservan `/`. Si cambia el nombre del repositorio, debe actualizarse esta base en `vite.config.ts`.

Para reproducir el despliegue localmente:

```sh
npm run build -- --mode github-pages
npm run preview -- --mode github-pages
```

Abrir http://127.0.0.1:4173/Vitand/. No se necesitan tokens en el código ni secretos manuales para desplegar: Actions utiliza los permisos del workflow.

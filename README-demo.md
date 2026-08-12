# Demo comercial — Reformas y Proyectos J.A.G

Demo de venta para el prospecto nº1 de `top20_clientes_web.md`.
**No está publicada. No se ha contactado con el cliente.**

---

## Cómo abrirla

El servidor local ya está levantado en el puerto 5500. Abre:

```bash
start http://localhost:5500
```

Si el servidor no estuviera activo, arráncalo desde la carpeta del proyecto:

```bash
python -m http.server 5500 --directory demo-reformas-jag
```

También puedes abrir `demo-reformas-jag/index.html` con doble clic: al ser HTML/CSS/JS
estático funciona igual sin servidor.

---

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Landing completa: hero, servicios, qué incluye, microcemento, obras, razones, gremios, formulario, contacto. |
| `css/styles.css` | Sistema de diseño completo (tokens de color/espaciado/tipografía) y responsive mobile-first. |
| `js/main.js` | Menú móvil, scroll reveal, validación del formulario. Sin dependencias externas. |
| `../.claude/launch.json` | Configuración del servidor local. |

---

## De dónde sale cada dato

**Todo el contenido está extraído de su web actual** (`proyect-reformas.wixsite.com/misitio`).
No hay ni un dato inventado.

| Dato en la demo | Origen |
|---|---|
| Nombre, responsable (José Antonio Gomez) | Página de contacto |
| Caniego 27, 09587 Valle de Mena, Burgos | Página de contacto |
| 635 037 576 · proyect-reformas@hotmail.com | Página de contacto |
| Horario L-V 8:30–19:00, fin de semana cerrado | Página de contacto |
| "Empresa nacida en Leioa, Bilbao en el año 1998" | Sobre nosotros |
| "Más de 10 años de experiencia en el sector de la reforma" | Sobre nosotros |
| Garantía de 2 años en todas las obras | Sobre nosotros |
| "No cobramos desplazamiento" | Páginas de servicio |
| Zona: Bilbao, Bizkaia, Burgos, Leioa, Getxo, Barakaldo | Cabecera y páginas de servicio |
| Los 9 gremios | Página "Cordinación gremios" |
| Cambio bañera→ducha: desde 963 €, 24 h, lista de lo incluido, plato de carga mineral 3 cm, medidas | Página del servicio |
| Reforma de baño: desde 3.096,42 €, 6 días, lista de lo incluido | Página del servicio |
| Cocinas: 6-7 días, lista de lo incluido | Página del servicio |
| Ventajas del microcemento (sin desalojar, sin desescombro, sobre azulejo) | Página de microcemento |

### Dos cosas que debes confirmar con él antes de la reunión

1. **Los precios son de 2018.** La página de origen es literalmente
   `/ofertas-reformas-2018` y dice *"Oferta valida desde el 01/02/18 al 01/06/218"* (con el
   error tipográfico incluido). En la demo aparecen redondeados como "desde 963 €" y
   "desde 3.096 €" con la nota *"precios orientativos de partida"*. **Pregúntale los precios
   actuales y actualízalos antes de enseñar la demo**, o quita las cifras.
2. **1998 vs "más de 10 años".** Su web dice ambas cosas. He usado "empresa nacida en Leioa
   (Bilbao) en 1998" porque es el dato concreto. Confírmalo.

### Las fotos son SUYAS, descargadas de su web actual

La galería usa 6 fotografías que **él mismo tiene publicadas** en
`proyect-reformas.wixsite.com/misitio`. Están descargadas a `img/` y se sirven desde la propia
demo (no enlazadas a Wix, que se rompería). No hay ni una foto de stock ni inventada.

| Archivo | Qué muestra | Página de origen |
|---|---|---|
| `bano-cambio-banera-ducha.jpg` | Baño con plato de ducha, mampara y lavabo suspendido | Cambio bañera por ducha |
| `cocina-blanca.jpg` | Cocina blanca con horno y microondas empotrados | Inicio |
| `bano-microcemento.jpg` | Baño en microcemento con dos lavabos redondos | Microcemento |
| `cocina-granate.jpg` | Cocina blanca con frentes granate | Inicio |
| `microcemento-vivienda.jpg` | Distribuidor con paredes de microcemento | Inicio |
| `ducha-microcemento.jpg` | Ducha revestida en microcemento | Cambio bañera por ducha |

**Descarté 2 de las 8 que tiene** (están en `img/_no-usadas/` por si las quieres):

- `catalogo-platos-ducha.jpg` — es una foto de catálogo del proveedor (5 platos sobre fondo
  blanco), no una obra suya. En una galería de "trabajos realizados" cantaría.
- `probable-stock-bano-marmol.jpg` — baño de mármol con toallas dobladas de revista y **un
  enchufe de tipo americano** en la pared. Es casi con seguridad una foto de stock que él
  bajó de internet. Atribuírsela como obra propia sería mentir en su nombre.

**Eso último es munición de venta**: su web actual mezcla obra real con stock. Puedes
decirle "he montado la galería solo con tus obras de verdad; las de catálogo las he quitado
porque un cliente las detecta". Y sigue siendo la excusa perfecta para pedirle más fotos:
`ducha-microcemento.jpg` es la única de baja resolución del conjunto.

---

## Argumentos de venta que la demo demuestra sola

Pon su web actual y la demo una al lado de la otra en el móvil. No hace falta discurso.

1. **Su URL es `proyect-reformas.wixsite.com/misitio`.** "Misitio" en la dirección. Un cliente
   que va a gastarse 3.000 € en un baño no llama a eso.
2. **Su web enlaza a Google+**, red social cerrada por Google en 2019.
3. **La página de ofertas se llama "2018"** y la oferta caducó en junio de 2018 (con un error
   de tecleo en la fecha: "01/06/218").
4. **No tiene botón de WhatsApp.** Su único móvil es el 635 037 576 y no hay forma de escribirle
   con un toque. La demo lo tiene fijo en la barra inferior, visible en todo momento.
5. **No tiene formulario de presupuesto.** El activo más valioso que tiene —que publica
   precios y plazos, cosa que casi ningún competidor hace— está enterrado en páginas sueltas.
   La demo lo pone en el hero.

## Sobre el formulario y el WhatsApp de la demo

- **El formulario no envía nada.** Valida los campos y muestra la confirmación en pantalla.
  Al contratar se conecta a su email o directamente a WhatsApp.
- **Los botones de WhatsApp sí son reales**: apuntan a `wa.me/34635037576`, su número.
  Si pulsas uno mientras enseñas la demo, se abre un chat con él. **Ojo con eso si aún no
  quieres contactarle.** Para desactivarlos, sustituye los tres `href="https://wa.me/..."`
  por `href="#presupuesto"`.
- El aviso oscuro de arriba ("Demo de presentación… No publicada") se cierra con la X para
  hacer capturas limpias. Para eliminarlo del todo, borra el bloque `<div class="demo-strip">`
  de `index.html`.

---

## Ficha técnica (por si te la pide)

- **Diseño**: estilo *Trust & Authority* (skill UI/UX Pro Max). Tipografías Lexend + Source Sans 3.
  Paleta naranja obra `#C2410C` sobre slate `#0F172A`.
- **Mobile-first** con cortes en 560 / 768 / 1024 px. Sin scroll horizontal a 375 px.
- **Accesibilidad verificada**: 0 fallos de contraste WCAG AA en toda la página (medido con
  composición alfa real, no estimado). Targets táctiles ≥ 24 px, botones ≥ 44 px. Navegación
  por teclado con foco visible, skip link, labels reales en todos los campos, errores con
  `role="alert"`, `prefers-reduced-motion` respetado.
- **Rendimiento**: 3 archivos, sin frameworks, sin librerías. Todos los iconos son SVG inline
  (cero emojis). Lo único externo son las tipografías de Google Fonts.
- **SEO base**: title y meta description orientados a "reformas de baños y cocinas en Bilbao,
  Bizkaia y Burgos", jerarquía de encabezados correcta, HTML semántico.

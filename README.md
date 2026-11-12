# Tarea 3: Enrutamiento en React con React Router DOM (SPA)

> **Curso:** ACM UD WebDev Frontend ReactJS  
> **Rama Estudiantil:** ACM — Universidad Distrital Francisco José de Caldas  
> **Instructor:** Juan Díaz Peña  
> **Estudiante:** Julián Sánchez (`julsanchezc@unal.edu.co`)  
> **Clase de Referencia:** Clase 07 — *RoutingEnReact* ([Ver en YouTube](https://youtu.be/r99oTsh_kLI))  


---

## 🎯 Objetivo de la Asignación

Construir una **Single Page Application (SPA)** completa utilizando la biblioteca estándar `react-router-dom` (v6), implementando navegación del lado del cliente (*Client-Side Routing*) sin recargas completas de página, barra de navegación persistente con enlaces activos (`NavLink`), vistas dinámicas (`Inicio`, `Cursos`, `Nosotros`, `Contacto`) y captura comodín para rutas inexistentes con una página de error 404 (`NotFound`).

---

## 🧠 Fundamentos Teóricos de Client-Side Routing

### 1. Aplicación Tradicional (Multi-Page) vs Single Page Application (SPA)
- **Modelo Tradicional**: Al hacer clic en un enlace `<a>`, el navegador envía una petición HTTP al servidor, desecha el árbol DOM existente, descarga un nuevo archivo HTML con sus hojas de estilo y scripts, y reconstruye la pantalla desde cero. Esto destruye el estado de variables en memoria y genera parpadeos visibles.
- **Modelo SPA con React Router**: El navegador carga un único archivo `index.html`. A partir de ahí, `BrowserRouter` intercepta las URLs mediante la **History API** de HTML5 (`pushState` / `popstate`). Cuando la dirección cambia, React monta y desmonta únicamente los componentes específicos de la vista, manteniendo la cabecera, la barra de navegación y los estados en memoria sin recargar el navegador.

### 2. Anatomía de los Componentes de React Router DOM
```jsx
// 1. BrowserRouter: Proveedor del contexto de enrutamiento
<BrowserRouter>
  {/* Elemento persistente fuera de Routes */}
  <Navbar />

  {/* 2. Routes: Evaluador de coincidencias */}
  <Routes>
    {/* 3. Route: Mapeo entre ruta URL y componente */}
    <Route path="/" element={<Home />} />
    <Route path="/cursos" element={<Cursos />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/contacto" element={<Contacto />} />

    {/* 4. Wildcard (*): Atrapa cualquier ruta no declarada para error 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### 3. Diferencia entre `<Link>` y `<NavLink>`
- `<Link to="...">`: Genera un ancla accesible que navega internamente sin recargar la página.
- `<NavLink to="...">`: Extiende las capacidades de `Link` inyectando automáticamente el estado `{ isActive }` en su propiedad `className`. Esto permite aplicar estilos visuales de pestaña activa (fondos resaltados, bordes luminosos) de manera declarativa.

---

## 🔬 Vistas Implementadas en el Proyecto

1. **`Home` ([`src/pages/Home.jsx`](./src/pages/Home.jsx))**:
   - Portada de la Rama Estudiantil ACM UD con botones de llamada a la acción hacia el catálogo formativo y la sección institucional.
2. **`Cursos` ([`src/pages/Cursos.jsx`](./src/pages/Cursos.jsx))**:
   - Catálogo interactivo de iniciativas formativas de la universidad (Frontend ReactJS, Git & GitHub, Python para IA).
3. **`Nosotros` ([`src/pages/Nosotros.jsx`](./src/pages/Nosotros.jsx))**:
   - Manifiesto, misión y pilares académicos de la comunidad tecnológica universitaria.
4. **`Contacto` ([`src/pages/Contacto.jsx`](./src/pages/Contacto.jsx))**:
   - Formulario reactivo gestionado con `useState` que demuestra la persistencia de estado durante la sesión de navegación.
5. **`NotFound` (404) ([`src/pages/NotFound.jsx`](./src/pages/NotFound.jsx))**:
   - Ruta comodín `path="*"` que previene pantallas en blanco ante enlaces rotos, capturando `location.pathname` y ofreciendo botones de redirección hacia el inicio.

---

## 📂 Arquitectura de Archivos del Proyecto

```text
acmud-react-routing/
├── README.md                          # Documentación completa y guía de entrega
├── index.html                         # Contenedor HTML base de la SPA
├── package.json                       # Dependencias (React 18 + React Router DOM v6)
├── vite.config.js                     # Configuración del servidor de desarrollo Vite
└── src/
    ├── main.jsx                       # Montaje en el Virtual DOM
    ├── App.jsx                        # Enrutador principal con BrowserRouter y Routes
    ├── index.css                      # Sistema de diseño moderno en modo oscuro
    ├── components/
    │   └── Navbar.jsx                 # Barra de navegación persistente con NavLink
    └── pages/
        ├── Home.jsx                   # Vista principal de bienvenida
        ├── Cursos.jsx                 # Catálogo de cursos y talleres
        ├── Nosotros.jsx               # Información institucional de la ACM UD
        ├── Contacto.jsx               # Formulario reactivo de registro
        └── NotFound.jsx               # Captura de error 404 (Wildcard *)
```

---

## 🛠️ Instrucciones de Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd acmud-react-routing

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev

# 4. Compilar para producción (validación de build)
npm run build
```

---

## 📜 Historial de Commits Atómicos (Convención Git)

1. `chore: inicializar proyecto React con Vite y dependencia react-router-dom`
2. `feat(views): implementar vistas modulares Home, Cursos, Nosotros y Contacto`
3. `feat(views): implementar pagina de error 404 NotFound para rutas no coincidentes`
4. `feat(router): configurar BrowserRouter, Routes y barra de navegacion con NavLink`
5. `style: agregar diseno responsivo moderno para navegacion SPA sin recarga`
6. `docs: documentar arquitectura de rutas, instalacion y guia en README`

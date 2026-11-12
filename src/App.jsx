import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cursos from './pages/Cursos.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Contacto from './pages/Contacto.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * ============================================================================
 * ENRUTADOR PRINCIPAL (AppRouter)
 * ============================================================================
 * 
 * En este componente raíz se configura la arquitectura de enrutamiento:
 * 
 * 1. <BrowserRouter>:
 *    Envuelve a toda la aplicación y se conecta con la API de History de HTML5
 *    (pushState, replaceState y popstate) para sincronizar la barra de direcciones
 *    del navegador con el estado de las vistas de React.
 * 
 * 2. <Navbar />:
 *    Componente de cabecera persistente colocado fuera de <Routes>, asegurando
 *    que nunca se desmonte al navegar entre pestañas.
 * 
 * 3. <Routes>:
 *    Contenedor inteligente que compara la URL actual contra cada una de sus
 *    rutas hijas (<Route>) y renderiza exclusivamente el componente coincidente.
 * 
 * 4. <Route path="*" element={<NotFound />} />:
 *    Ruta comodín de captura total que gestiona errores 404 para cualquier
 *    dirección inexistente.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="acm-app-layout">
        {/* Cabecera de navegación persistente */}
        <Navbar />

        {/* Contenedor dinámico de vistas según la ruta activa */}
        <main className="acm-main-content">
          <Routes>
            {/* Ruta Raíz (Inicio) */}
            <Route path="/" element={<Home />} />

            {/* Rutas Principales */}
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Ruta Comodín (404 Not Found) para enlaces rotos o inexistentes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Pie de página común para toda la SPA */}
        <footer className="acm-global-footer">
          <div className="acm-global-footer__inner">
            <p>
              © {new Date().getFullYear()} Rama Estudiantil ACM — Universidad Distrital Francisco José de Caldas.
            </p>
            <p className="acm-global-footer__note">
              Desarrollado con <strong>React Router DOM v6</strong> para la Tarea 3 del curso de Frontend.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

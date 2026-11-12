import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * ============================================================================
 * COMPONENTE: Navbar (Barra de Navegación Principal)
 * ============================================================================
 * 
 * ¿Por qué usar NavLink en lugar de etiquetas <a> ordinarias?
 * 1. Prevención de recargas: Las etiquetas <a> forzarían al navegador a solicitar
 *    nuevamente el index.html y todos los bundles JavaScript, destruyendo el estado.
 * 2. Detección automática de ruta activa: NavLink expone una función en su prop
 *    `className` que recibe `{ isActive }`. Esto permite resaltar visualmente
 *    la pestaña en la que se encuentra el usuario actualmente sin escribir lógica extra.
 */
function Navbar() {
  /**
   * Helper para asignar clase activa a los enlaces
   */
  const claseEnlace = ({ isActive }) =>
    `acm-nav-link ${isActive ? 'acm-nav-link--active' : ''}`;

  return (
    <header className="acm-navbar-wrapper">
      <nav className="acm-navbar">
        {/* Logotipo / Marca principal */}
        <Link to="/" className="acm-navbar__brand">
          <span className="acm-navbar__logo">🧭</span>
          <div className="acm-navbar__brand-text">
            <strong>ACM UD</strong>
            <span>Portal SPA</span>
          </div>
        </Link>

        {/* Lista de enlaces de navegación declarativa */}
        <div className="acm-navbar__links">
          <NavLink to="/" end className={claseEnlace}>
            Inicio
          </NavLink>
          <NavLink to="/cursos" className={claseEnlace}>
            Cursos
          </NavLink>
          <NavLink to="/nosotros" className={claseEnlace}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={claseEnlace}>
            Contacto
          </NavLink>
        </div>

        {/* Botón de prueba para ruta 404 */}
        <div className="acm-navbar__cta">
          <Link to="/ruta-inexistente-demo" className="acm-btn acm-btn--sm acm-btn--outline" title="Prueba el enrutador con una URL no declarada">
            Probar 404
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

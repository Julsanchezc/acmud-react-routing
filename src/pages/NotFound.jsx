import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * ============================================================================
 * VISTA: NotFound (Ruta Comodín 404 — Wildcard '*')
 * ============================================================================
 * 
 * ¿Cómo funciona la ruta 404 en React Router DOM?
 * En el contenedor `<Routes>`, las rutas se evalúan de arriba a abajo buscando
 * coincidencias con la URL del navegador.
 * 
 * Si ninguna de las rutas declaradas coincide, la regla comodín `path="*"`
 * atrapa la petición y monta este componente, evitando que el usuario vea una
 * pantalla en blanco o un fallo silencioso.
 */
function NotFound() {
  const location = useLocation();

  return (
    <div className="acm-page acm-page--notfound">
      <div className="acm-notfound-card">
        <span className="acm-notfound-badge">Error 404</span>
        <h2 className="acm-notfound-title">Página No Encontrada</h2>
        <p className="acm-notfound-text">
          La ruta solicitada <code>{location.pathname}</code> no existe en el enrutador de esta aplicación.
        </p>

        <div className="acm-notfound-actions">
          {/* Navegación interna segura hacia la ruta raíz */}
          <Link to="/" className="acm-btn acm-btn--primary">
            ← Regresar al Inicio
          </Link>
          <Link to="/cursos" className="acm-btn acm-btn--secondary">
            Ver Cursos Disponibles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

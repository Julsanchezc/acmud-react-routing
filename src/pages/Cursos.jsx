import React from 'react';
import { Link } from 'react-router-dom';

const LISTADO_CURSOS = [
  {
    id: 'react-frontend',
    titulo: 'WebDev Frontend con ReactJS',
    nivel: 'Intermedio',
    duracion: '8 Módulos',
    instructor: 'Juan Díaz Peña',
    descripcion: 'Componentes, patrones avanzados de props, hooks (useState, useEffect, useContext) y enrutamiento SPA con React Router.',
    estado: 'En curso / Activo'
  },
  {
    id: 'git-github',
    titulo: 'Control de Versiones con Git & GitHub',
    nivel: 'Básico a Avanzado',
    duracion: '4 Módulos',
    instructor: 'Comunidad ACM UD',
    descripcion: 'Commits atómicos, ramas, flujos de trabajo colaborativo, Conventional Commits y Pull Requests.',
    estado: 'Completado'
  },
  {
    id: 'python-ia',
    titulo: 'Fundamentos de Python & Inteligencia Artificial',
    nivel: 'Intermedio',
    duracion: '6 Módulos',
    instructor: 'Semillero ACM',
    descripcion: 'NumPy, Pandas, modelos predictivos, agentes autónomos y análisis exploratorio de datos.',
    estado: 'Próximamente'
  }
];

/**
 * ============================================================================
 * VISTA: Cursos (Catálogo de Programas Formativos)
 * ============================================================================
 */
function Cursos() {
  return (
    <div className="acm-page acm-page--cursos">
      <header className="acm-page-header">
        <h2>📚 Catálogo de Cursos y Talleres ACM UD</h2>
        <p>Iniciativas formativas diseñadas e impartidas por estudiantes y egresados de la Universidad Distrital.</p>
      </header>

      <div className="acm-courses-grid">
        {LISTADO_CURSOS.map((curso) => (
          <div key={curso.id} className="acm-course-card">
            <div className="acm-course-card__header">
              <span className="acm-tag">{curso.nivel}</span>
              <span className={`acm-course-status ${curso.estado.includes('Activo') ? 'acm-course-status--active' : ''}`}>
                {curso.estado}
              </span>
            </div>

            <h3 className="acm-course-card__title">{curso.titulo}</h3>
            <p className="acm-course-card__desc">{curso.descripcion}</p>

            <div className="acm-course-card__meta">
              <span>👤 Instructor: <strong>{curso.instructor}</strong></span>
              <span>⏱️ Duración: <strong>{curso.duracion}</strong></span>
            </div>

            <div className="acm-course-card__footer">
              <Link to="/contacto" className="acm-btn acm-btn--sm">
                Inscribirme / Consultar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;

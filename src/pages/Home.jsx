import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ============================================================================
 * VISTA: Home (Página de Inicio)
 * ============================================================================
 * 
 * En una Single Page Application (SPA), navegar hacia esta vista no provoca
 * una petición HTTP que recargue el HTML completo. El componente se monta
 * instantáneamente en el DOM conservando los estilos globales y el estado de la app.
 */
function Home() {
  return (
    <div className="acm-page acm-page--home">
      <section className="acm-hero">
        <span className="acm-hero__tag">Comunidad Tecnológica Estudiantil</span>
        <h2 className="acm-hero__title">Rama Estudiantil ACM — Universidad Distrital</h2>
        <p className="acm-hero__text">
          Espacio universitario dedicado al fomento de las ciencias de la computación, desarrollo de software,
          inteligencia artificial y programación competitiva en la Universidad Distrital Francisco José de Caldas.
        </p>

        <div className="acm-hero__actions">
          {/* Navegación declarativa interna mediante Link to (sin recargas) */}
          <Link to="/cursos" className="acm-btn acm-btn--primary">
            Explorar Cursos y Talleres →
          </Link>
          <Link to="/nosotros" className="acm-btn acm-btn--secondary">
            Conocer la Rama
          </Link>
        </div>
      </section>

      <section className="acm-features-grid">
        <article className="acm-feature-card">
          <div className="acm-feature-card__icon">⚛️</div>
          <h3>Desarrollo Web Frontend</h3>
          <p>Aprende ReactJS, gestión de estado con hooks modernos y arquitectura de Single Page Applications.</p>
        </article>

        <article className="acm-feature-card">
          <div className="acm-feature-card__icon">🏆</div>
          <h3>Algoritmos Competitivos</h3>
          <p>Entrenamiento riguroso en estructuras de datos, grafos y resolución de problemas tipo ICPC.</p>
        </article>

        <article className="acm-feature-card">
          <div className="acm-feature-card__icon">🤝</div>
          <h3>Comunidad & Networking</h3>
          <p>Eventos, hackathones, semilleros de investigación y vinculación con la industria tecnológica.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;

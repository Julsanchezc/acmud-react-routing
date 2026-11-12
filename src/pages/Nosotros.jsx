import React from 'react';

/**
 * ============================================================================
 * VISTA: Nosotros (Información Institucional de la Rama ACM)
 * ============================================================================
 */
function Nosotros() {
  return (
    <div className="acm-page acm-page--nosotros">
      <header className="acm-page-header">
        <h2>🏛️ Rama Estudiantil ACM Universidad Distrital</h2>
        <p>Capítulo estudiantil oficial afiliado a la Association for Computing Machinery (ACM).</p>
      </header>

      <section className="acm-info-block">
        <h3>Misión</h3>
        <p>
          Potenciar la formación integral y técnica de los estudiantes de Ingeniería de Sistemas y carreras afines
          de la Universidad Distrital Francisco José de Caldas, promoviendo el aprendizaje práctico, la investigación
          aplicada, el trabajo colaborativo en código abierto y la participación en competencias de programación de nivel nacional e internacional.
        </p>
      </section>

      <section className="acm-pillars-grid">
        <div className="acm-pillar">
          <h4>💡 Innovación Abierta</h4>
          <p>Desarrollo de proyectos con tecnologías de punta, estándares web modernos y buenas prácticas de ingeniería.</p>
        </div>

        <div className="acm-pillar">
          <h4>📖 Docencia Horizontal</h4>
          <p>Talleres gratuitos dictados por estudiantes para estudiantes, democratizando el acceso al conocimiento tecnológico.</p>
        </div>

        <div className="acm-pillar">
          <h4>🌐 Proyección Social</h4>
          <p>Uso de la computación como herramienta de transformación comunitaria y académica en Bogotá y Colombia.</p>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;

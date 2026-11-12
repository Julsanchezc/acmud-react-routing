import React, { useState } from 'react';

/**
 * ============================================================================
 * VISTA: Contacto (Formulario Interactivo con Estado)
 * ============================================================================
 * 
 * Demuestra la persistencia de estado dentro de la SPA mientras el usuario
 * interactúa con el formulario.
 */
function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    interes: 'frontend',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setEnviado(true);
  };

  return (
    <div className="acm-page acm-page--contacto">
      <header className="acm-page-header">
        <h2>✉️ Contáctanos / Registro a Talleres</h2>
        <p>¿Tienes dudas sobre los cursos o quieres unirte a la Rama Estudiantil ACM UD? Escríbenos.</p>
      </header>

      <div className="acm-contact-layout">
        <form onSubmit={manejarEnvio} className="acm-contact-form">
          <div className="acm-field">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ej. Julián Sánchez"
              value={formData.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="acm-field">
            <label htmlFor="correo">Correo electrónico institucional:</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="usuario@udistrital.edu.co"
              value={formData.correo}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="acm-field">
            <label htmlFor="interes">Área de interés principal:</label>
            <select
              id="interes"
              name="interes"
              value={formData.interes}
              onChange={manejarCambio}
            >
              <option value="frontend">Frontend ReactJS</option>
              <option value="algoritmos">Programación Competitiva & Algoritmos</option>
              <option value="ia">Inteligencia Artificial & Datos</option>
              <option value="comunidad">Voluntariado y Organización</option>
            </select>
          </div>

          <div className="acm-field">
            <label htmlFor="mensaje">Mensaje o comentarios adicionales:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Cuéntanos tus expectativas o dudas..."
              value={formData.mensaje}
              onChange={manejarCambio}
            />
          </div>

          <button type="submit" className="acm-btn acm-btn--primary">
            Enviar Mensaje
          </button>

          {enviado && (
            <div className="acm-alert-box">
              ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto al correo {formData.correo}.
            </div>
          )}
        </form>

        <aside className="acm-contact-sidebar">
          <h4>📍 Ubicación y Enlaces</h4>
          <p><strong>Universidad Distrital Francisco José de Caldas</strong></p>
          <p>Facultad de Ingeniería — Bogotá, Colombia</p>
          <hr className="acm-divider" />
          <p><strong>Comunidad:</strong> Rama Estudiantil ACM UD</p>
          <p><strong>Modalidad:</strong> Semipresencial y Talleres Virtuales</p>
        </aside>
      </div>
    </div>
  );
}

export default Contacto;

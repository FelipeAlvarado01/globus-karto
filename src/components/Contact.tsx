"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h2 className={styles.title}>Solicita una Cotización de Proyecto</h2>
            <p className={styles.subtitle}>
              Completa los datos de tu terreno o proyecto y nuestro equipo de ingenieros te responderá en menos de 24 horas.
            </p>
          </div>

          {submitted ? (
            <div className={styles.successMessage}>
              ✓ ¡Gracias por tu solicitud! Nos pondremos en contacto contigo a la brevedad.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="nombre" className={styles.label}>
                    Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    placeholder="Ej. Constructora del Sur"
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="contacto@empresa.com"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="telefono" className={styles.label}>
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+51 987 654 321"
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="servicio" className={styles.label}>
                    Tipo de Servicio Requerido *
                  </label>
                  <select id="servicio" required className={styles.select}>
                    <option value="">Selecciona un servicio...</option>
                    <option value="topografia">Topografía y Nivelación</option>
                    <option value="geotecnia">Estudio de Suelos (Geotecnia)</option>
                    <option value="drones">Fotogrametría con Drones</option>
                    <option value="batimetria">Batimetría</option>
                    <option value="gis">Cartografía y GIS</option>
                    <option value="otro">Otro / Asesoría Integral</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="mensaje" className={styles.label}>
                  Detalles del Proyecto / Ubicación del Terreno *
                </label>
                <textarea
                  id="mensaje"
                  required
                  placeholder="Describe la ubicación aproximada, área del terreno (m² o ha) y alcance deseado..."
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Enviar Solicitud de Cotización
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

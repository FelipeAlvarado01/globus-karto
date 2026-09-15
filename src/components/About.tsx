import styles from "./About.module.css";

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>
            Rigor Técnico y Precisión en cada Levantamiento de Campo
          </h2>
          <p className={styles.description}>
            En <strong>Globus Karto</strong> combinamos la experiencia geológica aplicada con sensores topográficos de última generación. Nuestro equipo de ingenieros geólogos y topógrafos garantiza entregables certificados y compatibles con los estándares de ingeniería civil y normativa vigente.
          </p>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>+500</div>
            <div className={styles.statLabel}>Proyectos Ejecutados</div>
            <div className={styles.statSubtext}>En obras viales, minería y edificación</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>±2 mm</div>
            <div className={styles.statLabel}>Precisión Milimétrica</div>
            <div className={styles.statSubtext}>Equipos GNSS y Estación Total</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>+10,000 ha</div>
            <div className={styles.statLabel}>Mapeo Fotogramétrico</div>
            <div className={styles.statSubtext}>Levantamientos aéreos con UAV</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Informes Certificados</div>
            <div className={styles.statSubtext}>Compatibles con CAD y GIS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

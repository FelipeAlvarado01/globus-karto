import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Ingeniería Geológica & Topografía Digital
        </div>
        <h1 className={styles.title}>
          Estudios de Suelo y Topografía de <span className={styles.highlight}>Alta Precisión</span>
        </h1>
        <p className={styles.subtitle}>
          Especialistas en levantamientos fotogramétricos, mecánica de suelos, batimetría y modelado 3D de terrenos para proyectos de construcción, minería e infraestructura.
        </p>
        <div className={styles.actions}>
          <Link href="#contacto" className={styles.primaryBtn}>
            Solicitar Cotización
          </Link>
          <Link href="#servicios" className={styles.secondaryBtn}>
            Explorar Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logo/GLOBUSKARTO-LOGO.png"
              alt="Globus Karto Logo"
              width={36}
              height={36}
              className={styles.logoImage}
            />
            <span>Globus Karto</span>
          </div>
          <p className={styles.brandText}>
            Consultoría especializada en servicios geológicos, geotecnia, fotogrametría y topografía de precisión para proyectos de ingeniería.
          </p>
        </div>

        <div>
          <h4 className={styles.title}>Navegación</h4>
          <ul className={styles.linkList}>
            <li>
              <Link href="#servicios" className={styles.linkItem}>
                Servicios Topográficos
              </Link>
            </li>
            <li>
              <Link href="#nosotros" className={styles.linkItem}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#contacto" className={styles.linkItem}>
                Cotizar Proyecto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Especialidades</h4>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>Mecánica de Suelos (EMS)</li>
            <li className={styles.linkItem}>Fotogrametría UAV LiDAR</li>
            <li className={styles.linkItem}>Control Topográfico de Obras</li>
            <li className={styles.linkItem}>Sistemas GIS y Cartografía</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Globus Karto. Todos los derechos reservados.</p>
        <p>Desarrollado con Next.js & TypeScript</p>
      </div>
    </footer>
  );
}

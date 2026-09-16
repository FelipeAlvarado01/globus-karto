"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo/GLOBUSKARTO-LOGO.png"
            alt="Globus Karto Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
          <span>Globus Karto</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="#servicios" className={styles.navLink}>
            Servicios
          </Link>
          <Link href="#nosotros" className={styles.navLink}>
            Nosotros
          </Link>
          <Link href="#proyectos" className={styles.navLink}>
            Proyectos
          </Link>
          <Link href="#contacto" className={styles.navLink}>
            Contacto
          </Link>
        </nav>
        <Link href="#contacto" className={styles.ctaButton}>
          Cotizar Proyecto
        </Link>
      </div>
    </header>
  );
}

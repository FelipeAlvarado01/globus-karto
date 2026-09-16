import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Topografía de Precisión",
    description: "Levantamientos topográficos con Estación Total y GPS RTK de alta precisión para edificaciones, carreteras y saneamiento.",
    features: [
      "Levantamientos urbanos y rurales",
      "Control de replanteo de obras",
      "Nivelación geométrica de precisión",
    ],
  },
  {
    number: "02",
    title: "Estudios Geológicos y Geotécnicos",
    description: "Caracterización geológica de suelos y rocas, calicatas, ensayos de laboratorio y análisis de estabilidad de taludes.",
    features: [
      "Mecánica de suelos (EMS)",
      "Estudios de riesgo sismotectónico",
      "Perforación y muestreo de suelos",
    ],
  },
  {
    number: "03",
    title: "Fotogrametría con Drones (UAV)",
    description: "Mapeo aéreo de grandes extensiones de terreno con resolución centimétrica mediante vehículos aéreos no tripulados.",
    features: [
      "Ortofotomapeo HD",
      "Nubes de puntos 3D y LiDAR",
      "Modelos digitales de terreno (DEM/DSM)",
    ],
  },
  {
    number: "04",
    title: "Cartografía y Sistemas GIS",
    description: "Procesamiento de información espacial, diseño de mapas temáticos e integración de bases de datos geográficas.",
    features: [
      "Sistemas de Información Geográfica",
      "Cartografía catastral y temática",
      "Procesamiento e imagen satelital",
    ],
  },
  {
    number: "05",
    title: "Batimetría y Levantamientos Hidrográficos",
    description: "Medición de relieves submarinos y de cuerpos de agua para proyectos portuarios, represas y dragado.",
    features: [
      "Levantamiento de lechos fluviales y marinos",
      "Cálculo de volumen de embalses",
      "Monitoreo de sedimentación",
    ],
  },
  {
    number: "06",
    title: "Cálculo de Movimiento de Tierras",
    description: "Determinación precisa de volúmenes de corte y relleno para optimización de presupuestos de obra civil.",
    features: [
      "Cálculo de volumetría 3D",
      "Secciones transversales",
      "Informes de cubicación certificados",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.tag}>Especialidades Técnicas</p>
          <h2 className={styles.title}>Servicios Integrales en Geología y Topografía</h2>
          <p className={styles.description}>
            Soluciones técnicas respaldadas por profesionales certificados y tecnología de vanguardia para garantizar la precisión de tus proyectos.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardNumber}>{service.number}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((feat, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

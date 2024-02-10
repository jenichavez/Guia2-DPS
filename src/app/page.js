import styles from "./page.module.css";
import Image from "next/image";
const Equipos = ({ equipos }) => {
return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul >
{equipo.plantilla.map((jugador) => (
<li className={styles.container__list} key={jugador.id}>
<strong>{jugador.nombre}</strong>
<p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p>

<img src={jugador.Imagen} className={styles.imgplayer}></img>
</li>
))}
</ul>
</div>
))}
</div>
);
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON
const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "plantilla":[
  {"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg","Imagen":"imagenes/imagen.1.jpg"},
  {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg","Imagen":"imagenes/imagen.2.jpg" },
  {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg","Imagen":"imagenes/imagen.3.jpg" },
  ]},
  {"id": 2,
  "nombre": "Barcelona",
  "plantilla":[
  {"id": 1,"nombre":"Leonel Messi","Altura":"1.70","Peso":"72Kg","Imagen":"imagenes/imagen1.jpg" },
  {"id": 2,"nombre":"Joao Felix","Altura":"1.81","Peso":"70kg","Imagen":"imagenes/imagen2.jpg" },
  {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg","Imagen":"imagenes/imagen3.png" },
  ]},
  {"id":3,
  "nombre": "PSG",
  "plantilla":[
    {"id":1,"nombre":"Kylian Mbappé","Altura":"1.78","Peso":"75kg","Imagen":"imagenes/imagen-1.jpg" },
    {"id":2,"nombre":"Marco Asensio","Altura":"1.82","Peso":"76kg","Imagen":"imagenes/imagen-2.png"},
    {"id":3,"nombre":"Neymar JR","Altura":"1.75","Peso":"68kg","Imagen":"imagenes/imagen-3.jpg" },
  ]}
  // ... agregar otros equipos
  ];
  return (
    <main className={`${styles.main} ${styles.container__background}`}>
  <div>
  <h1>Mi Aplicación de Fútbol</h1>
  <Equipos equipos={equiposData} />
  </div>
  </main>
  );
  }
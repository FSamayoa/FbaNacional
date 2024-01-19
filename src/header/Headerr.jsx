import { BDPartidos } from "./partidos";
import styles from "../header/Header.module.css"

const Encabezado = () => {
  return (
    <div className={styles.row}>
      {BDPartidos.map((partido) => (
          <div key={partido.P} className={styles.card}>
            <p>
              {partido.local} {partido.ResLocal}   {partido.live ? <img className={styles.live} src="https://i.imgur.com/eT5tuUt.gif" alt="Live" /> : ""}
            </p>
            <p>
              {partido.visita} {partido.ResVisita}
            </p>
            <p></p>
          </div>
      ))}
    </div>
  );
};

export default Encabezado;

import { BDPartidos } from "./partidos";

const Header = () => {
  return (
    <div>
      {BDPartidos.map((partido) => (
      <div key={partido.P}>
        <p>{partido.local} {partido.ResLocal}</p>
        <p>{partido.visita} {partido.ResVisita}</p>
        <p>{partido.live ? '🔴' : ''}</p>
      </div>
      ))}
    </div>
  );
};

export default Header;

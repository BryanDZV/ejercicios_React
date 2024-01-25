import "./App.css";
import Header from "./componentes/Menus/Header/Header";
import Promocion from "./componentes/Menus/Promocion/Promocion";
import Tendencias from "./componentes/Menus/Tendencias/Tendencias";
import Gallery from "./componentes/Menus/Gallery/Gallery";
import data from "../data";
const { header, promotion, gallery, heading } = data;

function App() {
  return (
    <div>
      <Header arrayObjeto={header}>hola</Header>
      <Promocion objeto={promotion}></Promocion>
      <Tendencias objeto={heading}></Tendencias>
      <Gallery arrayObjeto={gallery}></Gallery>
    </div>
  );
}

export default App;

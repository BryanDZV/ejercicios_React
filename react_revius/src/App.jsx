import data from "../data";
import "./App.css";
import Revius from "./Componentes/Revius/Revius";
const { reviews } = data;
function App() {
  return (
    <div>
      <Revius arrayObjetos={reviews}>hola</Revius>
    </div>
  );
}

export default App;


import './App.css';
import logo1 from "./imagenes/logo2.png";
import Tarea from "./componentes/Tarea";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
    return (
            <div className="App">
                <div className="logo-contenedor">
                <img
                src={logo1}
                className="freeLogo" />
                </div>
                <div className="tareas-lista-principal">
                <h1>Mis Tareas</h1>
                <ListaDeTareas />
            </div>
            </div> 
            );
}

export default App;

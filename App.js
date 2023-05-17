import "./App.css";
import { Producto } from './Componentes/Productos';


function App() {
    return ( < div className = "App" >
        <
        div className = "contendedor-principal" >
        <
        h1 > Productos mas vendidos de Saphirus < /h1>    <
        Producto nombre = 'Aerosoles de Ambiente'
        tipo = 'Saphirus'
        variedad = '92 Fragancias'
        imagen = 'aerosol'
        descripcion = ' Fabricamos la mas amplia variedad de fragancias.' / >

        <
        Producto nombre = 'Difusores de'
        tipo = 'Ambientes'
        variedad = '62 Fragancias'
        imagen = 'difusor'
        descripcion = ' Para decorar y perfumar tus espacios. Con varillas de rattan.' / >

        <
        Producto nombre = 'Textiles'
        tipo = 'Saphirus'
        variedad = '75 Fragancias'
        imagen = 'textil'
        descripcion = 'Ideal para renovar tus telas y ambientes' / >


        <
        /div> </div >

    );
}
export default App;
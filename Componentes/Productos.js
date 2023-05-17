import React from 'react'
import '../estilos/Productos.css'

export function Producto(props) {
    return ( 
      <div className = 'contenedor-productos' >
        <img className = 'imagen-producto'
        src = { require(`../imagenes/${props.imagen}.png`) }
        alt = 'Foto Aerosoles' />
        <div className = 'contenedor-informacion'>
        <p className = 'nombre-producto' > < strong > { props.nombre } { props.tipo } < /strong> </p > 
        <p className = 'variedad' > { props.variedad } </p>  
        <p className = 'texto' > { props.descripcion } </p> </div> </div >
    )
}

export default Producto;

import { NavLink } from "react-router-dom"
export function BoxNoSignInUserPayment(){
    return(
        <>
            <div className="box-carrito box-usuario">
        {" "}
        {/* Div dedicado a mostrar el nombre del usuario y su correo y foto de perfil*/}
        <div className="foto-perfil-usuario">
          <img
            className="img-perfil"
            src="img/Iconos/foto-perfil-usuario.svg"
            alt="foto-perfil"
          />{" "}
          {/*Foto usuario*/}
        </div>
        
          <div>
          <h3>Inicia sesión para guardar tu reserva</h3>
            <NavLink className="formulario" to="/login">Iniciar sesión</NavLink>
        </div>
        
        
      </div>
        </>
    )
}
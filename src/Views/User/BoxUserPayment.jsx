
export function BoxUserPayment({user}){
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
          <h3>Has iniciado sesión</h3>
          <p className="nombre-usuario">{user.email}</p>
        </div>
        
        
      </div>
        </>
    )
}
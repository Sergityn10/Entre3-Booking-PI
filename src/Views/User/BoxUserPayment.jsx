
import styles from "./../../css/style-carrito.module.css"
export function BoxUserPayment({user,styles}){
    return(
        <>
            <div className={[`${styles["box-carrito"]} ${styles["box-usuario"]}`]}>
        {" "}
        {/* Div dedicado a mostrar el nombre del usuario y su correo y foto de perfil*/}
        <div className={styles["foto-perfil-usuario"]}>
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
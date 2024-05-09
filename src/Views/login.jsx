import './../css/login.css'
export function LogIn({Click}){
    const mensajeError = "Error al iniciar sesión";
    return(

        <>
           
	<div id="main">
		<div id="contenedor-central">
			<form id="formulario-inicio" action="" method="post">
				<h1>Inicia sesión o crea una cuenta</h1>
				
					<p id="error-inicio">{mensajeError}</p>
				
				<label htmlFor="email"><span>E-mail</span></label><br/> 
                <input type="email" name="email" placeholder="Indica tu dirección de email" required/><br/>

				<label htmlFor="password"><span>Contraseña</span></label><br/> <input
					type="password" name="password"
					placeholder="Introduce tu contraseña" required/><br/>

				<p>
					<input type="submit" onSubmit={Click} value="Continuar con e-mail"/>
				</p>
			</form>

			<div id="opciones">
				<p>o usar una de estas opciones</p>
				<div className="logos">
					<div className="logo-wrapper">
						<img src="img/Logos/facebook.png" alt="Facebook"/>
					</div>
					<div className="logo-wrapper">
						<img src="img/Logos/google.png" alt="Google"/>
					</div>
					<div className="logo-wrapper">
						<img src="img/Logos/apple.png" alt="Apple"/>
					</div>
				</div>
			</div>

			<hr className="separator"/>

			<p id="crear-cuenta">
				¿Eres nuevo en Booking? <a href="/signup">Crear cuenta</a>
			</p>

			<hr className="separator"/>

			<p id="terminos">
				Al iniciar sesión o al crear una cuenta, aceptas nuestros <a href="">Términos
					y <br/>condiciones
				</a> y la <a href="">Política de privacidad</a>
			</p>

			<hr className="separator"/>

			<p id="derechos">
				Todos los derechos reservados. <br/> Copyright (2006 - 2024) -
				Booking.com
			</p>

		</div>

	</div>




        </>
    )
}
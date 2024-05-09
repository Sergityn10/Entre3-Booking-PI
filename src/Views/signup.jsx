import './../css/registro.css'
export function SignUp(){

    return (
        <>
    <div id="main">
		<div id="contenedor-central">
			<form id="formulario-registro" method="post" action="RegisterServlet.do">
				<h1>¡Únete a nosotros!</h1>

				<label htmlFor="nombre"><span>Nombre</span></label><br/> <input
					type="text" name="nombre" placeholder="Ingresa tu nombre" required/><br/>

				<label htmlFor="apellidos"><span>Apellidos</span></label><br/> <input
					type="text" name="apellidos" placeholder="Ingresa tus apellidos"
					required/><br/> 
                <label htmlFor="email"><span>Correo electrónico</span></label><br/> <input type="email" name="email"
					placeholder="Indica tu dirección de correo electrónico" required/><br/>

				<label htmlFor="password"><span>Contraseña</span></label><br/> 
                <input
					type="password" name="password"
					placeholder="Introduce tu contraseña" 
					pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@, $, !, %, *, ?, &), y debe tener una longitud mínima de 8 caracteres." required/><br/>

				<p>
					<input type="submit" value="Crear cuenta"/>
				</p>
			</form>


			<hr className="separator"/>

			<p id="crear-cuenta">
				¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
			</p>

			<hr className="separator"/>

			<p id="terminos">
				Al crear una cuenta, aceptas nuestros <a href="">Términos y <br/>condiciones
				</a>. Por favor, lee nuestra <a href="">Política de privacidad</a>
			</p>

		</div>

	</div>
    </>
    )
}
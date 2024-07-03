
import { SignInForm } from '../Components/Forms/SignInForm'
export function SignUp(){

    return (
        <>
    <div id="main">
		<div id="contenedor-central">
			<SignInForm />


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
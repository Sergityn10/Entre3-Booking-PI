import { useContext } from 'react';
import './../css/login.css'
import userService from '../Controllers/UserService';
import { UserContext } from '../Controllers/UserService';
import { redirect } from 'react-router-dom';
import { LogInForm } from '../Components/Forms/LogInForm';
export function LogIn({myClick}){
    const mensajeError = "Error al iniciar sesión";
	const {setUser} = useContext(UserContext)
	
    // const handleLogIn = (form)=>{
		// let log = {
		// 	id: 1,
		// 	email: form.target.email.value,
		// 	password: form.target.password.value,
		// 	name: "",
		// 	surname: ""
        //     }
	// 	userService.logIn(log).then(res =>setUser(log)
	// 		)
				
					

        
        
    //     myClick()
	// 	redirect("/")
    // }


	
    return(

        <>
           
	<div id="main">
		<div id="contenedor-central">
			<LogInForm/>

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
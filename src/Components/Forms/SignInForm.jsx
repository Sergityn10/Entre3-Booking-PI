import { useContext, useState } from 'react';
import "./../../css/login.css"
import userService from '../../Controllers/UserService';
import { UserContext } from '../../Controllers/UserService';
import { redirect } from 'react-router-dom';

export function SignInForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [myerror, setError] = useState('');
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const [loading, setLoading] = useState(false);

    const handleLogIn = (event) =>{
		event.preventDefault();
		const form = event.target;
		const log = {
			"id": 1,
			"email": `${form.email.value}`,
			"password": `${form.password.value}`,
			"name": `${form.nombre.value}`,
			"surname": `${form.apellidos.value}`
            }
        setLoading(true)
        userService.createUser(log).catch((error) => setError(error))
		setLoading(false)
	}
    return(
        <>
			
            <form id="formulario-registro" method="post" onSubmit={handleLogIn}>
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
			<p id="error-inicio">{myerror}</p>
				<p>
					<input type="submit" value="Crear cuenta"  />

				</p>
			</form>
        </>
    )
}
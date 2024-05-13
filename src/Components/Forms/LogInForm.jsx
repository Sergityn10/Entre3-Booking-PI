import { useContext, useState } from 'react';
import "./../../css/login.css"
import userService from '../../Controllers/UserService';
import { UserContext } from '../../Controllers/UserService';
import { redirect } from 'react-router-dom';

export function LogInForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const {user, setUser,isLoggedIn,setIsLoggedIn} = useContext(UserContext)
    const handleLogIn = (event) =>{
		event.preventDefault();
		const form = event.target;
		// const log = {
		// 	"id": 1,
		// 	"email": `${form.email.value}`,
		// 	"password": `${form.password.value}`,
		// 	"name": "",
		// 	"surname": ""
        //     }
        const log = {
			id: 1,
			email: `${form.email.value}`,
			password: `${form.password.value}`,
			name: ``,
			surname: ``
            }
        userService.login(log).then((response) => alert(response.status))
		userService.getUserActual().then((response) => {if(response.status === 200) setUser(response.data)})

			
			if(user != null){
            setIsLoggedIn(true)
            
			window.location.replace("/search")
        }
		else{
            setError("Invalid email or password")
        }
		
        
	}

    return (
        <>
            <form id="formulario-inicio" onSubmit={handleLogIn} method="post">
				<h1>Inicia sesión o crea una cuenta</h1>
				
					<p id="error-inicio">{error}</p>
				
				<label htmlFor="email"><span>E-mail</span></label><br/> 
                <input type="email" name="email" placeholder="Indica tu dirección de email" required/><br/>

				<label htmlFor="password"><span>Contraseña</span></label><br/> <input
					type="password" name="password"
					placeholder="Introduce tu contraseña" required/><br/>

				<p>
					<input type="submit"  value="Continuar con e-mail"/>
				</p>
			</form>
        </>
    )
}
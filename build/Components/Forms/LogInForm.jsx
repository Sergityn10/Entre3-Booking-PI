import { useContext, useState } from 'react';
import "./../../css/login.css"
import userService from '../../Controllers/UserService';
import UserContext from '../../context/UserContext';
import { json, redirect, useNavigate } from 'react-router-dom';

export function LogInForm(){
	const navigate = useNavigate()
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
        // userService.login(log)
		// .then((response) => {
			
		// 	userService.getUserByEmail(log.email)
		// 		.then((response) => setUser(response.data)).then((res) => console.log(res.data))
		// 	setIsLoggedIn(true)
			
            
		// 	navigate("/")
		// 		})
		// 	.catch((err) => {
		// 		setError(err.response.data.userMessage)
				
		// 		})
			
		// setLoading(false)
            
        
		userService.login(log).then((response)=>{
			userService.getUserByEmail(log.email).then((res) => {
				setUser(res.data)
				
				setIsLoggedIn(true)
				window.localStorage.setItem("LocalUser",JSON.stringify(res.data))
				navigate("/")
			})
			
			}).catch((err)=>{
				setError(err.response.data.userMessage)
		})
        
	}

    return (
		<form id="formulario-inicio" onSubmit={handleLogIn} method="post">
			<h1>Inicia sesión o crea una cuenta</h1>
			
			<p id="error-inicio">{error}</p>
			
			<label htmlFor="email"><span>E-mail</span></label> 
			<input type="email" name="email" 
				onChange={(e) => setEmail(e.target.value)} 
				placeholder="Indica tu dirección de email" 
				value={email}
				required/>
			

			<label htmlFor="password"><span>Contraseña</span></label> 
			<input
				type="password" name="password"
				placeholder="Introduce tu contraseña" 
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				required/>

			<p>
				<input type="submit"  value="Continuar con e-mail"/>
			</p>
		</form>		
    )
}
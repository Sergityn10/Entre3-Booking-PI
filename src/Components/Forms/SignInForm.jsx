import { useContext, useEffect, useState } from 'react';
import "./../../css/login.css"
import userService from '../../Controllers/UserService';
import UserContext from '../../context/UserContext';
import { redirect, useNavigate } from 'react-router-dom';

export function SignInForm() {
	const navigate = useNavigate()

	const [email, setEmail] = useState('');
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [password, setPassword] = useState('');
	const [myerror, setError] = useState('');
	const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext)
	const [loading, setLoading] = useState(false);

	const handleLogIn = (event) => {
		event.preventDefault();
		let log = {}
		if(isLoggedIn){
			log = {
			"id": user.id,
			"email": `${email}`,
			"password": `${password}`,
			"name": `${nombre}`,
			"surname": `${apellido}`
		}
		}else{
			log = {
			"id": 1,
			"email": `${email}`,
			"password": `${password}`,
			"name": `${nombre}`,
			"surname": `${apellido}`
		}
		}
		
		setLoading(true)
		if(!isLoggedIn){
			userService.createUser(log).then((response) => {
			userService.getUserByEmail(log.email).then((res) =>{
				setUser(res.data)
				setIsLoggedIn(true)
				navigate("/")
			})
		})
		.catch((err) => {
			setError(err.response.data.userMessage)
		})
		}else{
			userService.updateUser(log).then((response) => {
			userService.getUserByEmail(log.email).then((res) =>{
				setUser(res.data)
				
				navigate("/")
			})
		})
		.catch((err) => {
			setError(err.response.data.userMessage)
		})
		}
		
		setLoading(false)
		
	}
	const handleDelete = (event) =>{
		userService.deleteUser(user.id).then((response) =>{
			setIsLoggedIn(false)
			setUser(null)
			navigate("/")
		})
	}
	useEffect(()=>{
		if(isLoggedIn){
			setApellido(user.surname)
			setEmail(user.email)
			setNombre(user.name)
			setPassword(user.password)
		}
	},[])
	return (
		<>

			<form id="formulario-registro" method="post" onSubmit={handleLogIn}>
				<h1>¡Únete a nosotros!</h1>

				<label htmlFor="nombre"><span>Nombre</span></label><br /> 
				<input
					type="text" name="nombre" 
					placeholder="Ingresa tu nombre" required 
					value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
					<br />

				<label htmlFor="apellidos"><span>Apellidos</span></label><br /> 
				<input
					type="text" name="apellidos" placeholder="Ingresa tus apellidos"
					value={apellido} onChange={(e)=> setApellido(e.target.value)}
					required />
				<br />
				<label htmlFor="email"><span>Correo electrónico</span></label><br /> 
				<input 
					type="email" name="email" 
					placeholder="Ingresa tu correo electrónico" value={email}
					onChange={(e)=> setEmail(e.target.value)} required /><br />

				<label htmlFor="password"><span>Contraseña</span></label><br />
				<input
					type="password" name="password"
					placeholder="Introduce tu contraseña"
					pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" 
					title="La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@, $, !, %, *, ?, &), y debe tener una longitud mínima de 8 caracteres." 
					value ={password} onChange={(e)=> setPassword(e.target.value)} required />
					<br />
				<p id="error-inicio">{myerror}</p>
				<p>
					
					{isLoggedIn? <><input type="submit" value="Editar usuario" /> <input type="button" value="Eliminar cuenta" onClick={handleDelete} /></>:<input type="submit" value="Crear cuenta" />}
					

				</p>
			</form>
		</>
	)
}
import { useContext, useState } from 'react';
import styles from './../css/login.module.css';
import userService from '../Controllers/UserService';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { LogInForm } from '../Components/Forms/LogInForm';

export function LogIn() {
    const { setUser, setIsLoggedIn } = useContext(UserContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    

    return (
        <>
            <div className={styles.main}>
               
                    <LogInForm />
                    {error && <p className={styles.error}>{error}</p>}
                    <div id={styles.opciones}>
                        <p>o usar una de estas opciones</p>
                        <div className={styles.logos}>
                            <div className={styles['logo_wrapper']}>
                                <img src={`${process.env.PUBLIC_URL}/img/Logos/facebook.png`} alt="Facebook" />
                            </div>
                            <div className={styles['logo_wrapper']}>
                                <img src={`${process.env.PUBLIC_URL}/img/Logos/google.png`} alt="Google" />
                            </div>
                            <div className={styles['logo_wrapper']}>
                                <img src={`${process.env.PUBLIC_URL}/img/Logos/apple.png`} alt="Apple" />
                            </div>
                        </div>
                    </div>

                    <hr className={styles.separator} />

                    <p id={styles['crear_cuenta']}>
                        ¿Eres nuevo en Booking? <a href="/signup">Crear cuenta</a>
                    </p>

                    <hr className={styles.separator} />

                    <p id={styles['terminos']}>
                        Al iniciar sesión o al crear una cuenta, aceptas nuestros <a href="">Términos
                            y <br />condiciones
                        </a> y la <a href="">Política de privacidad</a>
                    </p>

                    <hr className={styles.separator} />

                    <p id={styles['derechos']}>
                        Todos los derechos reservados. <br /> Copyright (2006 - 2024) -
                        Booking.com
                    </p>
                
            </div>
        </>
    );
}

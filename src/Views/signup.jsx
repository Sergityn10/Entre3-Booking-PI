import styles from './../css/registro.module.css';
//import styles from './../css/registro.module.css';
import { SignInForm } from '../Components/Forms/SignInForm';

export function SignUp() {
    return (
        <>
            <div className={styles.main}>
                <SignInForm />

                <hr className={styles.separator} />

                <p className={styles.crearCuenta}>
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>

                <hr className={styles.separator} />

                <p className={styles.terminos}>
                    Al crear una cuenta, aceptas nuestros <a href="">Términos y <br />condiciones</a>. Por favor, lee nuestra <a href="">Política de privacidad</a>.
                </p>
            </div>
        </>
    );
}
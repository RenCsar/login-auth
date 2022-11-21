import { Container } from "./SignUp.styled";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

export const SignUp = () => {
  return (
    <Container>
      <div className="login-container">
        <h1>Criar conta</h1>
        <p>Bem-vindo(a) de volta!</p>
        <div className="btn-container">
          <button><FcGoogle size={20}/><p>Google</p></button>
          <button><BsFacebook size={20}/><p>Facebook</p></button>
        </div>
        <div className="paragrafo-container">
          <p></p>
          <p>Ou</p>
          <p></p>
        </div>
        <form>
          <input type="email" id="email" placeholder="Digite seu e-mail" required/>
          <button>Continue</button>
        </form>
        <div className="signup-container">
          <small>Já tem uma conta?</small>
          <Link to='/'>Voltar para Login</Link>
        </div>
      </div>
    </Container>
  )
}
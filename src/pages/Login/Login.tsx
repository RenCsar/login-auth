import { Container } from "./Login.styled";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

export const Login: React.FC = () => {
  return (
    <>
      <Container>
        <div className="login-container">
          <h1>login</h1>
          <p>Bem-vindo(a) de volta!</p>
          <div className="btn-container">
            <button><FcGoogle size={20}/><p>Google</p></button>
            <button><BsFacebook size={20}/><p>Facebook</p></button>
          </div>
          <div className="paragrafo-container">
            <p></p>
            <small>Ou</small>
            <p></p>
          </div>
          <form>
            <input type="email" id="email" placeholder="Digite seu e-mail" required/>
            <input type="password" id="email" placeholder="Digite sua senha" required/>
            <button>Continue</button>
          </form>
          <div className="signup-container">
            <small>Não tem uma conta?</small>
            <Link to='/signup'>Criar uma conta</Link>
          </div>
        </div>
      </Container>
    </>
  )
}

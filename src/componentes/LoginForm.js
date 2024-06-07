import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiFillAlert } from "react-icons/ai";
import '../compohome/login.css';



const LoginForm = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <section>
        <div className='foto-login'>
         <img src={require('../assets/form.png')} alt="" />
        </div>

    <div className='text'>
    <h2>Entre com sua conta</h2>
    </div>

    <div className="login-form">
      
      <Form onSubmit={handleLogin}>
        
        <div className='input-box'>
        <AiFillAlert />
<Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>
        </div>

        <div className='input-box'>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox'/> Lembrar</label>
          <a href='#'> Esqueceu a senha?</a>
        </div>

        <Button variant="primary" type="submit" block className="custom-button">
        Entrar
        </Button>


        < div className='register-link'>
          <p> Não tem uma conta? <a href="/register">Registre-se</a></p>
        </div>

      </Form>
      </div>

    </section>
  );
};

export default LoginForm;
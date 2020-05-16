import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-Mail" />

        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">Criar conta</a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;

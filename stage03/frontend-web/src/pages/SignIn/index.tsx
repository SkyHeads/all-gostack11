import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-Mail" />

        <Input name="password" placeholder="Senha" type="password" />

        <Button>Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="forgot">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;

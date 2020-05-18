import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form onSubmit={() => {}}>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-Mail" icon={FiMail} />

        <Input
          name="password"
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button>Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </Form>

      <a href="forgot">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;

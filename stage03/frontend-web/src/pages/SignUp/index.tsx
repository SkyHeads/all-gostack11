import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
    </Content>
  </Container>
);

export default SignUp;

import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber"/>
      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail"/>
        <Input icon={FiUser} name="text" placeholder="Name"/>
        <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>

);

export default SignUp;

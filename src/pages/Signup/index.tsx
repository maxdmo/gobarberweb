import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import {useToast} from '../../hooks/ToastContext';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, AnimationContainer, Content, Background } from './styles';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {addToast} = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpData) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode fazer o seu logon no gobarber!',
      });
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, cheque as crendiciais.',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber"/>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiMail} name="email" placeholder="E-mail"/>
            <Input icon={FiUser} name="name" placeholder="Name"/>
            <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  )
};

export default SignUp;

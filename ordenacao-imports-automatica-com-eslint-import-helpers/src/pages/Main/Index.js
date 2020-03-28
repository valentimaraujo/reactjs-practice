import React from 'react';
import { userSelector } from 'react-redux';

import api from 'axios';

import Header from '~/components/Header';

import { Container, Title } from './styles';
import User from './Userr';


export default function Main() {
  return (
    <Container>
      <Title>Hello World</Title>
      <User />
    </Container>
  );
}

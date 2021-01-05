import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Image,TouchableOpacity,Text,View } from 'react-native';
import {palette, Container} from './setting';
import styled from 'styled-components/native';
import Input from './src/components/Input/Input';
import Button from './src/components/Button/Button';
const TextButton = styled.Text`
  font-size:14px;
  text-align:right;
  width:90%;
  position:relative;
  top:-12px;
`;
const Logo  = styled.Image`
  width:09.0rem;
  height:09.0rem;
`;

const CircleBase = styled.View`
  width:220px;
  height:220px;
  border-radius:50%;
  background-color:${props=> props.theme.palette.primaryColor}

`;

const CircleOne = styled(CircleBase)`
  position:absolute;
  top:-100px;
  right:-100px;
`;

const CircleTwo = styled(CircleBase)`
  position:absolute;
  left:-100px;
  bottom:-100px;
`;
const App = () => {
  const theme = { palette };
  return (

    <ThemeProvider theme={theme}>
      <CircleOne />
      <Container>
        <StatusBar style="auto" />
        <Logo source={require('./src/assets/logo.png')} />
        <Input placeholder="CPF" />
        <Input placeholder="Senha" />
        <TextButton>
          Recuperar Senha?
        </TextButton>
        <Button>Acessar Conta</Button>
      </Container>
      <CircleTwo />
    </ThemeProvider>
  );
}

export default App;


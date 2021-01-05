import React from 'react';
import {TouchableOpacity,Text } from 'react-native';
import styled from 'styled-components/native';
import {base} from './styled';
const LoginButton = styled.TouchableOpacity`
 ${base}
`;

const LabelButton = styled.Text`
  color:white;
  font-size:16px;

`;
const Button = ({children}) => {
  return (
    <LoginButton>
      <LabelButton>{children} </LabelButton>
    </LoginButton>
  );
}


export default Button;


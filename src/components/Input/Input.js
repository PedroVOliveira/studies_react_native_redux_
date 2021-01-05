import React from 'react';
import {Text, View,TextInput } from 'react-native';
import styled from 'styled-components/native';
import {base} from './styled';
const InputTextLabel = styled.TextInput`
 ${base}
`;

const Input = ({placeholder}) => {
  return <InputTextLabel placeholder={placeholder} placeholderTextColor='black'/>
}


export default Input;


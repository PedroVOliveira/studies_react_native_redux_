import {css} from 'styled-components/native';


export const base = css`
  background-color:${props => props.theme.palette.primaryColor};
  justify-content:center;
  align-items:center;
  width:180px;
  padding:12px;
  border-radius:30px;
`;

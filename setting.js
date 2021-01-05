import styled,{css} from 'styled-components/native';

export const DEFAULT_PADDING = '15px';

export const PRIMARY_COLOR = '#E00303';

export const SECONDARY_COLOR = '#D4D900';

export const Container = styled.View`
  overflow:hidden!important;
  flex:1;
  justify-content:center;
  align-items:center;
`;

export const palette = {
  primaryColor: PRIMARY_COLOR,
  secondaryColor: SECONDARY_COLOR,
}

Object.freeze(palette);

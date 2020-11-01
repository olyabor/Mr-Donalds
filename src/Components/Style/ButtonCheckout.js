import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-family: inherit;
  font-size: inherit;
  line-height: 25px;
  color: #fff;
  background-color: #299b01;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transitoin-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }
`;
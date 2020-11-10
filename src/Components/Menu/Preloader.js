import styled from 'styled-components';
import preloaderImg from '../../image/5.gif';

export const Preloader = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  background-image: url(${preloaderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

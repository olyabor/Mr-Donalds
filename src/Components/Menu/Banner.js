import styled from 'styled-components';
import bannerImg from '../../image/banner.png';


export const Banner = styled.div`
  width: 100%;
  min-height: 210px;
  margin-top: 80px;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

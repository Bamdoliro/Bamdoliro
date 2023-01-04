import styled from 'styled-components';
import background from '../../assets/background01.svg';

export const Main = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: none;
  background-size: cover;
`;

export const TextArea = styled.div`
  position: absolute;
  left: 120px;
  width: 530px;
  height: 166px;
`;

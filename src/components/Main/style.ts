import styled, { keyframes } from 'styled-components';
import background from '../../assets/background01.svg';

export const Main = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextArea = styled.div`
  position: absolute;
  left: 120px;
  width: 530px;
  height: 166px;
`;

export const ArrowBox = styled.div`
  position: absolute;
  bottom: 20px;
  width: 75px;
`;

const motion = keyframes`
    0% {margin-bottom: 0px;} /* 처음 위치 */
	100% {margin-bottom: 15px;} /* 마지막 위치 */
`;

export const Arrow = styled.img`
  width: 100%;
  height: 25px;
  animation: ${motion} 0.5s /* 속도 */ ease-in-out 0s
    /* 처음부터 끝까지 일정 속도로 진행 */ infinite alternate; /* 무한 반복 */
`;

export const ArrowBtn = styled.button``;

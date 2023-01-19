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

const motion = keyframes`
    0% {padding-bottom: 0px;} /* 처음 위치 */
	100% {padding-bottom: 20px;} /* 마지막 위치 */
`;

export const ArrowBox = styled.div`
  position: absolute;
  bottom: 10px;
  width: 75px;
  height: 100px;
  animation: ${motion} 0.5s /* 속도 */ ease-in-out 0s
    /* 처음부터 끝까지 일정 속도로 진행 */ infinite alternate; /* 무한 반복 */
`;

export const Arrow = styled.img`
  width: 100%;
  height: 25px;
`;

export const ArrowBtn = styled.button`
  width: 100%;
  height: 100%;
`;

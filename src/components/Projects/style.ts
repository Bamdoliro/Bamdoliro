import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  background-color: ${color.white};
  gap: 100px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 62.5%;
  height: 100%;
  border: 1px solid black;
`;

export const ProjectWrap = styled.div`
  width: 100%;
  height: 73%;
  gap: 4%;
  display: grid;
  grid-template-rows: 48% 48%; /* 명시적 2개 행 정의 */
  grid-template-columns: 48% 48%; /* 명시적 2개 열 정의 */
`;

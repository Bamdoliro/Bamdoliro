import styled from 'styled-components';
import { color } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
  height: 100%;
`;

export const ProjectWrap = styled.div`
  width: 100%;
  height: 57.6%;
  margin-top: 40px;
  row-gap: 3.5%;
  column-gap: 1.25%;
  display: grid;
  grid-template-rows: 48.1% 48.1%; /* 명시적 2개 행 정의 */
  grid-template-columns: 48.75% 48.75%; /* 명시적 2개 열 정의 */
`;

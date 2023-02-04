import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
  gap: 100px;
`;

export const Wrap = styled.div`
  width: 62.5%;
  height: 100%;
`;

export const ProjectWrap = styled.div`
  margin-top: 34px;
  width: 100%;
  height: 73%;
  gap: 4%;
  display: grid;
  grid-template-rows: 45% 45%; /* 명시적 2개 행 정의 */
  grid-template-columns: 48% 48%; /* 명시적 2개 열 정의 */
`;

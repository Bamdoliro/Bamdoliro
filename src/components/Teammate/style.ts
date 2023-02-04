import styled from 'styled-components';
import { color } from 'shared/styles/theme';

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
  justify-content: flex-end;
  width: 62.5%;
  height: 100%;
`;

export const ProfileGroup = styled.div`
  margin-top: 25px;
  height: 64%;
  column-gap: 2%;
  row-gap: 3%;
  display: grid;
  grid-template-rows: 47.5% 47.5%; /* 명시적 2개 행 정의 */
  grid-template-columns: 23.5% 23.5% 23.5% 23.5%; /* 명시적 2개 열 정의 */
`;

export const TextArea = styled.div``;

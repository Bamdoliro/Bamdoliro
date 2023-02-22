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
  justify-content: center;
  width: 70%;
  height: 100%;
`;

export const ProfileGroup = styled.div`
  margin-top: 25px;
  height: 59.3%;
  column-gap: 2.5%;
  row-gap: 3%;
  display: grid;
  grid-template-rows: 48.2% 48.2%; /* 명시적 2개 행 정의 */
  grid-template-columns: 23% 23% 23% 23%; /* 명시적 2개 열 정의 */
`;

export const TextArea = styled.div``;

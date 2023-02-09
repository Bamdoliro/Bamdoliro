import styled from 'styled-components';
import { color } from '../../shared/styles/theme';

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
  width: 62.5%;
  height: 100%;
`;

export const SubExplains = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.25rem;
`;

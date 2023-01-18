import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const History = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const InnerFrame = styled.div`
  width: 62.5%;
  height: 100%;
  border: 1px solid black;
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  border: 1px solid ${color.gray02};
  width: 60px;
  border-radius: 2px;
  margin-right: 14px;
`;

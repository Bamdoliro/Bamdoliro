import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const History = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const InnerFrame = styled.div`
  padding-top: 90px;
  width: 62.5%;
  height: 100%;
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  margin: 34px 0px 30px 0px;
`;

export const WidthLine = styled.div`
  border: 1px solid ${color.gray02};
  width: 60px;
  border-radius: 2px;
  margin-right: 14px;
`;

export const HistoryFrame = styled.div`
  position: relative;
  width: 100%;
`;

export const HistoryTextFrame = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 한줄

export const Year = styled.div`
  position: absolute;
  right: 25%;
  width: 120px;
`;

export const HistoryLine = styled.div`
  position: absolute;
  top: 195px;
  left: 80%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Round = styled.div`
  border: 10px solid ${color.gray01};
  width: 20px;
  border-radius: 50%;
`;

export const HeightLine = styled.div`
  height: 340px;
  width: 0px;
  border: 1.5px solid ${color.gray01};
`;

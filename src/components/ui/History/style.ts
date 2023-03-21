import styled from 'styled-components';
import { color } from 'styles/theme';
import * as T from 'styles/text';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
  overflow: hidden;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;
  height: 100%;
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px 30px 0px;
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
  min-height: 55%;
`;

export const HistoryTextFrame = styled.div`
  min-height: 80%;
  display: flex;
  flex-direction: column;
`;

// 한줄

export const Year = styled(T.TitleOne)`
  color: ${color.gray04};
  position: absolute;
  right: 45px;
  width: 120px;
`;

export const HistoryLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 80%;
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
  height: 55vh;
  width: 0;
  border: 1.5px solid ${color.gray01};
`;

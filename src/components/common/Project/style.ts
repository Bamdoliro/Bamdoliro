import styled from 'styled-components';
import { color } from 'shared/styles/theme';
import * as T from 'shared/styles/text';

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fbfbfb;
  border-radius: 7.5px;
`;

export const Img = styled.img`
  width: 100%;
  height: 68.75%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  height: 31.25%;
  padding: 0px 30px;
`;

export const InfoTitle = styled(T.TitleTwo)`
  color: ${color.gray04};
`;

export const InfoDate = styled(T.Caption)`
  color: ${color.gray02};
`;

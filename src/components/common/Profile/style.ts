import styled from 'styled-components';
import { color } from 'shared/styles/theme';
import * as T from '../../../shared/styles/text';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 7.5px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 67.5%;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 32.5%;
  background-color: #f8f9fa;
  padding: 4px; // 나중에 바꿔야징
`;

export const Name = styled(T.SubTitle)`
  color: ${color.gray04};
`;

export const Part = styled(T.Caption)`
  margin-top: 12px;
  color: ${color.gray02};
`;

export const GitHubURL = styled.a`
  margin-top: auto;
  align-self: flex-end;
`;

export const GitHubURLContent = styled(T.Caption)`
  display: flex;
  column-gap: 4px;
  align-items: center;
  color: ${color.gray03};
`;

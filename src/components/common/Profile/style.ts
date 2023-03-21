import styled from 'styled-components';
import { color } from 'styles/theme';
import * as T from 'styles/text';

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
  object-fit: cover;
`;

export const Information = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32.5%;
  background-color: #f8f9fa;
  padding: 8px;
`;

export const Name = styled(T.Caption)`
  color: ${color.gray04};
`;

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Part = styled(T.Caption)`
  color: ${color.gray02};
`;

export const Arrow = styled.img``;

export const GitHubURL = styled.a`
  right: 8px;
  bottom: 8px;
`;

export const GitHubURLContent = styled(T.Caption)`
  display: flex;
  column-gap: 4px;
  align-items: center;
  color: ${color.gray03};
`;

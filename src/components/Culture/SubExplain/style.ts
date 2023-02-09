import * as T from 'shared/styles/text';
import { color } from 'shared/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const IconImg = styled.img`
  width: 75px;
  height: 75px;
`;

export const SubTitle = styled(T.TitleTwo)`
  color: ${color.blackfont};
  margin: 28px 0px 18px 0px;
`;

export const Explain = styled(T.Caption)`
  color: ${color.gray03};
`;

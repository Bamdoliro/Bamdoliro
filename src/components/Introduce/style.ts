import styled from 'styled-components';
import { color } from 'shared/styles/theme';
import * as T from 'shared/styles/text';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 138px;
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 62.5%;
  height: 100%;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  max-width: 400px;
`;

export const Text = styled.pre`
  text-align: left;
  font-size: 28px;
  color: ${color.gray04};
  font-family: 'PretendardSemiBold';
`;

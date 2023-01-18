import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const Button = styled.button`
  padding: 8px 16px;
  margin: 0px 14px;
  font-weight: 600;
  font-size: 18px;
  background-color: ${color.white};
  border: none;
  color: ${(props) => props.color};
  border-radius: 7.5px;
  outline: none;
  &:hover {
    background: #f8f8f8;
  }
`;

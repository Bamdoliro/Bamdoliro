import styled from 'styled-components';
import { color } from 'shared/styles/theme';

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 14px;
  font-weight: 600;
  font-size: 18px;
  background-color: #fff;
  border: none;
  color: ${(props) => props.color || color.gray02};
  border-radius: 7.5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #f8f8f8;
  }
`;

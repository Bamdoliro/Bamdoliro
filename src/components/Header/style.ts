import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 1;
`;

export const InnerFrame = styled.div`
  width: 81.25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 100%;
  width: 161.33px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

import styled from 'styled-components';

export const LargeTitle = styled.h1`
  font-family: 'PretendardSemiBold';
  font-size: 4rem;
  color: ${(props) => props.color};
`;

export const TitleOne = styled.h2`
  font-family: 'PretendardBold';
  font-size: 3rem;
  color: ${(props) => props.color};
`;

export const TitleTwo = styled.h3`
  font-family: 'PretendardSemiBold';
  font-size: 2rem;
  color: ${(props) => props.color};
`;

export const SubTitle = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

export const BodyText = styled.p`
  font-family: 'PretendardMedium';
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

export const Caption = styled.p`
  font-family: 'PretendardMedium';
  font-size: 1.125rem;
  color: ${(props) => props.color};
`;

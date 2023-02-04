import * as S from './style';

interface PropsType {
  title: string;
  date: string;
}

export default function Project({ title, date }: PropsType) {
  return (
    <S.Project>
      <S.Img />
      <S.InfoWrap>
        <S.InfoTitle>{title}</S.InfoTitle>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoWrap>
    </S.Project>
  );
}

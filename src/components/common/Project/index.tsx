import * as S from './style';

interface PropsType {
  title: string;
  date: string;
  img: string;
}

export default function Project({ title, date, img }: PropsType) {
  return (
    <S.Project>
      <S.Img src={img} />
      <S.InfoWrap>
        <S.InfoTitle>{title}</S.InfoTitle>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoWrap>
    </S.Project>
  );
}

import * as S from './style';

interface PropsType {
  title: string;
  date: string;
  img: string;
}

export default function Project({ title, date, img }: PropsType) {
  return (
    <S.Project>
      <S.ImgFrame>
        <S.Img src={img} />
      </S.ImgFrame>
      <S.InfoWrap>
        <S.InfoTitle>{title}</S.InfoTitle>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoWrap>
    </S.Project>
  );
}

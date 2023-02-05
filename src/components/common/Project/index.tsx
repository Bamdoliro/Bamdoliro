import * as S from './style';

interface PropsType {
  title: string;
  date: string;
  img: string;
  url: string;
}

export default function Project({ title, date, img, url }: PropsType) {
  return (
    <S.Project>
      <S.ImgFrame>
        <S.Img src={img} />
      </S.ImgFrame>
      <S.InfoWrap>
        <S.Github href={url} target="_blank">
          <S.InfoTitle>{title}</S.InfoTitle>
        </S.Github>
        <S.InfoDate>{date}</S.InfoDate>
      </S.InfoWrap>
    </S.Project>
  );
}

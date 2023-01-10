import * as T from '../../../shared/styles/text';
import * as S from './style';

export default function TitleWrap() {
  return (
    <S.Wrap>
      <T.SubTitle color="#545F68">프로젝트</T.SubTitle>
      <S.TextArea>
        <T.TitleOne color="#1E2E3D">
          이걸 신준서가
          <br />
          혼자 디자인 다했어요
        </T.TitleOne>
      </S.TextArea>
    </S.Wrap>
  );
}

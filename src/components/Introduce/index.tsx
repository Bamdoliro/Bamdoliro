import TitleWrap from 'components/common/TItleWrap';
import { color } from 'shared/styles/theme';
import * as S from './style';

function Introduce() {
  return (
    <S.Container>
      <S.Wrap>
        <TitleWrap
          title="밤돌이로 팀"
          desc={'이걸 신준서가\n혼자서 디자인 다했어요'}
        />
        <S.TextWrap>
          <S.Text color={color.gray04}>
            김석진은 아무것도 안해요
            <br />
            자꾸 디자인만 시키는데 이거 맞나요
            <br />저 너무 억울해요 학생청원에 신고해주세요ㅠㅠ
          </S.Text>
          <S.Text color={color.gray04}>
            김석진은 아무것도 안해요
            <br />
            자꾸 디자인만 시키는데 이거 맞나요
            <br />저 너무 억울해요 학생청원에 신고해주세요ㅠㅠ
          </S.Text>
          <S.Text color={color.gray04}>
            김석진은 아무것도 안해요
            <br />
            자꾸 디자인만 시키는데 이거 맞나요
            <br />저 너무 억울해요 학생청원에 신고해주세요ㅠㅠ
          </S.Text>
        </S.TextWrap>
      </S.Wrap>
    </S.Container>
  );
}

export default Introduce;

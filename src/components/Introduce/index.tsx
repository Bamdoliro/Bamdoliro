import TitleWrap from 'components/common/TItleWrap';
import { color } from 'shared/styles/theme';
import IntroduceData from 'data/Introduce.json';
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
            안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요
          </S.Text>
          <S.Text color={color.gray04}>
            안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요
          </S.Text>
          <S.Text color={color.gray04}>
            안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요
          </S.Text>
        </S.TextWrap>
      </S.Wrap>
    </S.Container>
  );
}

export default Introduce;

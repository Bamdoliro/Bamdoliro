import TitleWrap from 'components/common/TitleWrap';
import { color } from 'shared/styles/theme';
import IntroduceData from 'data/introduce.json';
import * as S from './style';

function Introduce() {
  return (
    <S.Container id="0">
      <S.Wrap>
        <TitleWrap title="밤돌이로 팀" desc={"마이크로소프트, space x, 애플\n 밤돌이로 Let's go."} />
        <S.TextWrap>
          {IntroduceData.map((item) => {
            return (
              <S.Text color={color.gray04} key={item.id}>
                {item.content}
              </S.Text>
            );
          })}
        </S.TextWrap>
      </S.Wrap>
    </S.Container>
  );
}

export default Introduce;

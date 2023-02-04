import Project from 'components/common/Project';
import TitleWrap from 'components/common/TItleWrap';
import * as S from './style';

export default function Projects() {
  return (
    <S.Container>
      <S.Wrap>
        <TitleWrap
          title="밤돌이로 팀"
          desc={'이걸 신준서가\n혼자서 디자인 다했어요'}
        />
        <S.ProjectWrap>
          <Project />
          <Project />
          <Project />
          <Project />
        </S.ProjectWrap>
      </S.Wrap>
    </S.Container>
  );
}

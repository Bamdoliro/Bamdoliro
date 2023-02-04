import Project from 'components/common/Project';
import TitleWrap from 'components/common/TItleWrap';
import ProjectsData from 'data/ProjectsData.json';
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
          {ProjectsData.map((item) => {
            return (
              <Project title={item.title} date={item.date} key={item.id} />
            );
          })}
        </S.ProjectWrap>
      </S.Wrap>
    </S.Container>
  );
}

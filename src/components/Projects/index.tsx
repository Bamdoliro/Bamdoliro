import Project from 'components/common/Project';
import TitleWrap from 'components/common/TitleWrap';
import ProjectsData from 'data/ProjectsData.json';
import ProjectImg from 'assets/project.svg';
import * as S from './style';

export default function Projects() {
  return (
    <S.Container id="3">
      <S.Wrap>
        <TitleWrap
          title="밤돌이로 팀"
          desc={'이걸 신준서가\n혼자서 디자인 다했어요'}
        />
        <S.ProjectWrap>
          {ProjectsData.map((item) => {
            return (
              <Project
                title={item.title}
                date={item.date}
                img={ProjectImg}
                key={item.id}
              />
            );
          })}
        </S.ProjectWrap>
      </S.Wrap>
    </S.Container>
  );
}

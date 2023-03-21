import Project from 'components/common/Project';
import TitleWrap from 'components/common/TitleWrap';
import projects from 'datas/projects.json';
import ProjectImg from 'assets/project.svg';
import * as S from './style';

export default function Projects() {
  return (
    <S.Container id="4">
      <S.Wrap>
        <TitleWrap title="프로젝트" desc={'오직 밤돌이로만\n할 수 있는'} />
        <S.ProjectWrap>
          {projects.map((item) => {
            return (
              <Project
                title={item.title}
                date={item.date}
                img={ProjectImg}
                url={item.url}
                key={item.id}
              />
            );
          })}
        </S.ProjectWrap>
      </S.Wrap>
    </S.Container>
  );
}

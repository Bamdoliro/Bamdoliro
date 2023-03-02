import * as S from './style';
import GitHubURLArrow from '../../../assets/gitHubURLArrow.svg';

interface PropsType {
  name: string;
  part: string;
  gitHubId: string;
}

export default function Profile({ name, part, gitHubId }: PropsType) {
  return (
    <S.Profile>
      <S.Image src={`https://avatars.githubusercontent.com/${gitHubId}`}/>
      <S.Information>
        <S.Name>{name}</S.Name>
        <S.InfoBottom>
          <S.Part>{part}</S.Part>
          <S.GitHubURL href={`https://github.com/${gitHubId}`} target="_blank">
            <S.GitHubURLContent>
              GitHub
              <S.Arrow src={GitHubURLArrow}/>
            </S.GitHubURLContent>
          </S.GitHubURL>
        </S.InfoBottom>
      </S.Information>
    </S.Profile>
  );
}

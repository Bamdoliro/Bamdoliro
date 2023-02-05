import Gati from 'assets/gati.svg';
import * as S from './style';
import GitHubURLArrow from '../../../assets/gitHubURLArrow.svg';

interface PropsType {
  src: string;
  name: string;
  part: string;
  gitHubURL: string;
}

export default function Profile({ src, name, part, gitHubURL }: PropsType) {
  return (
    <S.Profile>
      <S.ProfileFrame>
        <S.Image src={src} />
      </S.ProfileFrame>
      <S.Information>
        <S.Name>{name}</S.Name>
        <S.Part>{part}</S.Part>
        <S.GitHubURL href={gitHubURL} target="_blank">
          <S.GitHubURLContent>
            GitHub
            <S.Arrow src={GitHubURLArrow} />
          </S.GitHubURLContent>
        </S.GitHubURL>
      </S.Information>
    </S.Profile>
  );
}

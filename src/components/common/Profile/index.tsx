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
            <S.Image src={src} />
            <S.Information>
                <S.Name>
                    {name}
                </S.Name>
                <S.Part>
                    {part}
                </S.Part>
                <S.GitHubURL href={gitHubURL} target="_blank">
                    <S.GitHubURLContent>
                        GitHub
                        <S.Image src={GitHubURLArrow} />
                    </S.GitHubURLContent>
                </S.GitHubURL>
            </S.Information>
        </S.Profile>
    )
}
import { useRecoilValue } from 'recoil';
import { radioState } from 'atoms';
import TitleWrap from 'components/common/TitleWrap';
import RadioGroup from 'components/ui/RadioGroup';
import GenerationRadio from 'components/ui/GenerationRadio';
import Profile from 'components/common/Profile';
import generation from 'datas/generation.json';
import profiles from 'datas/profiles.json';
import * as S from './style';

export default function Teammate() {
  const radioNumber = useRecoilValue(radioState);

  return (
    <S.Container id="2">
      <S.Wrap>
        <TitleWrap title="팀원" desc="내가 아니라 '우리'" />
        <RadioGroup>
          {generation.map((value) => (
            <GenerationRadio key={value} value={value} />
          ))}
        </RadioGroup>
        <S.ProfileGroup>
          {profiles[radioNumber].map(({ name, part, gitHubId }) => (
            <Profile
              key={gitHubId}
              name={name}
              part={part}
              gitHubId={gitHubId}
            />
          ))}
        </S.ProfileGroup>
      </S.Wrap>
    </S.Container>
  );
}

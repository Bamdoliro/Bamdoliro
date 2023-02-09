import { useRecoilValue } from 'recoil';
import { radioState } from 'atoms';
import TitleWrap from 'components/common/TitleWrap';
import RadioGroup from 'components/RadioGroup';
import GenerationRadio from 'components/GenerationRadio';
import ProfileGroup from 'components/ProfileGroup';
import Profile from 'components/common/Profile';
import Generation from 'data/Generation.json';
import Profiles from 'data/Profiles.json';
import * as S from './style';
import * as P from '../../assets/profiles';

export default function Teammate() {
  const radioNumber = useRecoilValue(radioState);

  return (
    <S.Teammate>
      <TitleWrap title="팀원" desc={`이걸 신준서가\n혼자서 디자인 다했어요`} />
      <RadioGroup>
        {Generation.map((value) => (
          <GenerationRadio key={value} value={value} />
        ))}
      </RadioGroup>
      <ProfileGroup>
        {Profiles[radioNumber].map(({ name, part, gitHubURL }) => (
          <Profile
            key={gitHubURL}
            src={P.IronPermMan}
            name={name}
            part={part}
            gitHubURL={gitHubURL}
          />
        ))}
      </ProfileGroup>
    </S.Teammate>
  );
}

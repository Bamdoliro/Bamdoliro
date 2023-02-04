import { useRecoilValue } from 'recoil';
import { radioState } from 'atoms';
import TitleWrap from 'components/common/TitleWrap';
import RadioGroup from 'components/RadioGroup';
import GenerationRadio from 'components/GenerationRadio';
import Profile from 'components/common/Profile';
import Generation from 'data/generation.json';
import Profiles from 'data/profiles.json';
import * as P from 'assets/profiles/index';
import * as S from './style';

export default function Teammate() {
  const radioNumber = useRecoilValue(radioState);

  return (
    <S.Container>
      <S.Wrap>
        <TitleWrap
          title="팀원"
          desc={`이걸 신준서가\n혼자서 디자인 다했어요`}
        />
        <RadioGroup>
          {Generation.map((value) => (
            <GenerationRadio key={value} value={value} />
          ))}
        </RadioGroup>
        <S.ProfileGroup>
          {Profiles[radioNumber].map(({ name, part, gitHubURL }) => (
            <Profile
              key={gitHubURL}
              src={P.IronPermMan}
              name={name}
              part={part}
              gitHubURL={gitHubURL}
            />
          ))}
        </S.ProfileGroup>
      </S.Wrap>
    </S.Container>
  );
}

import { useRecoilValue } from 'recoil';
import { radioState } from 'components/atoms';
import TitleWrap from 'components/common/TItleWrap';
import RadioGroup from 'components/common/RadioGroup';
import GenerationRadio from 'components/common/GenerationRadio';
import ProfileGroup from 'components/common/ProfileGroup';
import Profile from 'components/common/Profile'
import * as S from './style';
import * as P from '../../assets/profiles';
import { Generation, Profiles } from '../../assets/dummyData';

export default function Teammate() {
  const radioNumber = useRecoilValue(radioState);

  return (
    <S.Teammate>
      <TitleWrap title="팀원" desc={`이걸 신준서가\n혼자서 디자인 다했어요`} />
      <RadioGroup>
        {
          Generation.map(value => (
            <GenerationRadio key={value} value={value} />
          ))
        }
      </RadioGroup>
      <ProfileGroup>
        {
          Profiles[radioNumber].map(({ name, part, gitHubURL }) => (
            <Profile key={gitHubURL} src={P.IronPermMan} name={name} part={part} gitHubURL={gitHubURL} />
          ))
        }
      </ProfileGroup>
    </S.Teammate>
  );
}
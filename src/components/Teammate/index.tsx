import { useEffect, useState } from 'react';
import TitleWrap from 'components/common/TItleWrap';
import RadioGroup from 'components/common/RadioGroup';
import GenerationRadio from 'components/common/GenerationRadio';
import ProfileGroup from 'components/common/ProfileGroup';
import Profile from 'components/common/Profile'
import * as S from './style';
import * as P from '../../assets/profiles';

export default function Teammate() {
  const [radioNumber, setRadioNumber] = useState(1);

  useEffect(() => console.log(radioNumber), [radioNumber]);

  return (
    <S.Teammate>
      <TitleWrap title="팀원" desc={`이걸 신준서가\n혼자서 디자인 다했어요`} />
      <RadioGroup name="generationRadio" value={radioNumber} onChange={setRadioNumber}>
        <GenerationRadio value={1}>1기</GenerationRadio>
        <GenerationRadio value={2}>2기</GenerationRadio>
        <GenerationRadio value={3}>3기</GenerationRadio>
      </RadioGroup>
      {
        radioNumber === 1 &&
        <ProfileGroup>
          <Profile src={P.IronPermMan} name="김한울" part="BackEnd" gitHubURL="https://github.com/gimhanul" />
          <Profile src={P.IronPermMan} name="진유림" part="AI" gitHubURL="https://github.com/YuLim2" />
          <Profile src={P.IronPermMan} name="최태영" part="Design" gitHubURL="https://github.com/ty8116" />
          <Profile src={P.IronPermMan} name="진애란" part="FrontEnd" gitHubURL="https://github.com/Aeran21" />
          <Profile src={P.IronPermMan} name="이규진" part="BackEnd" gitHubURL="https://github.com/leekyukin" />
        </ProfileGroup>
      }
      {
        radioNumber === 2 &&
        <ProfileGroup>
          <Profile src={P.IronPermMan} name="강민제" part="BackEnd" gitHubURL="https://github.com/hsem4717" />
          <Profile src={P.IronPermMan} name="김석진" part="FrontEnd" gitHubURL="https://github.com/SEOKKAMONI" />
          <Profile src={P.IronPermMan} name="변은혜" part="BackEnd" gitHubURL="https://github.com/byuneunhye" />
          <Profile src={P.IronPermMan} name="신준서" part="Design" gitHubURL="https://github.com/SH1NJ00NSE0" />
          <Profile src={P.IronPermMan} name="원설아" part="FrontEnd" gitHubURL="https://github.com/seola1ne" />
          <Profile src={P.IronPermMan} name="이명재" part="FrontEnd" gitHubURL="https://github.com/arkk200" />
        </ProfileGroup>
      }
      {
        radioNumber === 3 && null
      }
    </S.Teammate>
  );
}
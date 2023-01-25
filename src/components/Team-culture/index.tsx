import React from 'react';

import TitleWrap from '../common/TItleWrap/index';
import SubExplain from './SubExplain';
import * as S from "./style";
import TwoPeople from "../../assets/two-people.svg";

export default function TeamCulture() {
    return (
        <S.Container>
            <TitleWrap
                title="팀 문화"
                desc="우리는 함께 성장하기를 꿈꿔요"
            />
            
            <S.SubExplains>
                <SubExplain
                    IconImage={TwoPeople}
                    SubTitle="주저없는 소통"
                    Explain="주저하거나 망설이지 않고 편안하게 소통해요!"
                />
                <SubExplain
                    IconImage={TwoPeople}
                    SubTitle="다소 과격한 성장 의지"
                    Explain="과격한 성장을 추구해요!"
                />
                <SubExplain
                    IconImage={TwoPeople}
                    SubTitle="수평적 문화 지향"
                    Explain="개인의 의견을 존중하는 분위기에서 협업해요!"
                />
            </S.SubExplains>
        </S.Container>
    );
}


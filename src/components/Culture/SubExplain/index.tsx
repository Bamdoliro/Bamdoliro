import React from "react";
import * as S from "./style";
import * as T from "../../../shared/styles/text";

export interface PropsType {
    IconImage: string;
    SubTitle: string;
    Explain: string;
}

export default function SubExplain({IconImage, SubTitle, Explain} : PropsType) {
    return (
        <S.Container>
            <S.IconImg 
                src={IconImage} 
            />
            <T.TitleTwo>
                {SubTitle}
            </T.TitleTwo>
            <T.Caption color="#545F68">
                {Explain}
            </T.Caption>
        </S.Container>
    );
}
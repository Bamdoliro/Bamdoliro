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
            <img 
                src={require({IconImage})}
                alt="Two-people" 
            />
            <T.TitleTwo>{SubTitle}</T.TitleTwo>
            <T.Caption>{Explain}</T.Caption>
        </S.Container>
    );
}
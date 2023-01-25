import { ReactNode } from 'react';
import * as S from './style';

interface PropsType {
    children: ReactNode;
}

export default function RadioGroup({children}: PropsType) {
    return (
        <S.RadioGroup>
            {children}
        </S.RadioGroup>
    )
}
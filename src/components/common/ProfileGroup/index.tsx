import { ReactNode } from 'react';
import * as S from './style';

interface PropsType {
    children: ReactNode;
}

export default function ProfileGroup({ children }: PropsType) {
    return (
        <S.ProfileGroup>
            {children}
        </S.ProfileGroup>
    )
}
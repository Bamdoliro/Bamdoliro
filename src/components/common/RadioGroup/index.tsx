import { Dispatch, ReactNode, SetStateAction } from 'react';
import { RadioContext } from '../../context';
import * as S from './style';

interface PropsType<T> {
    children: ReactNode;
    name: string;
    value: T;
    onChange: Dispatch<SetStateAction<T>>;
}

export default function RadioGroup<T>({children, ...rest}: PropsType<T>) {
    return (
        <S.RadioGroup>
            <RadioContext.Provider value={rest}>
                {children}
            </RadioContext.Provider>
        </S.RadioGroup>
    )
}
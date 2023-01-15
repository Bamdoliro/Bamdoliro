import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react';
import { RadioContext } from '../../context';
import * as S from './style';

interface PropsType {
    value: number;
    children: string;
}

export default function GenerationRadio({ value, children }: PropsType) {
    const group = useContext(RadioContext);
    const [id] = useState(uuidv4());

    return (
        <S.Label htmlFor={id}>
            <S.Radio
                id={id}
                type="radio"
                value={value}
                name={group.name}
                checked={group.value !== undefined ? value === group.value : undefined}
                onChange={e => group.onChange && group.onChange(Number(e.target.value))}
            />
            <S.Paragraph>
                {children}
            </S.Paragraph>
        </S.Label>
    )
}
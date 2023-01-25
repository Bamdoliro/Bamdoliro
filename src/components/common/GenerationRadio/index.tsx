import { useRecoilState } from 'recoil'
import { radioState } from 'components/atoms';
import * as S from './style';

interface PropsType {
    value: number;
    children: string;
}

export default function GenerationRadio({ value, children }: PropsType) {
    const [radioNumber, setRadioNumber] = useRecoilState(radioState);

    return (
        <S.Label>
            <S.Radio
                type="radio"
                value={value}
                name="generationRadio"
                checked={value === radioNumber}
                onChange={() => setRadioNumber(value)}
            />
            <S.Paragraph>
                {children}
            </S.Paragraph>
        </S.Label>
    )
}
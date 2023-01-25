import { useRecoilState } from 'recoil'
import { radioState } from 'atoms';
import { color } from 'shared/styles/theme';
import Button from '../common/Button';

interface PropsType {
    value: number;
}

export default function GenerationRadio({ value }: PropsType) {
    const [radioNumber, setRadioNumber] = useRecoilState(radioState);

    return (
        <Button
            color={value === radioNumber ? color.gray04 : undefined}
            title={`${value}기`}
            onClick={() => setRadioNumber(value)}
        />
    )
}
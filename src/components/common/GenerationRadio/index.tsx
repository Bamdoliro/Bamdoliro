import { useRecoilState } from 'recoil'
import { radioState } from 'components/atoms';
import Button from '../Button';

interface PropsType {
    value: number;
}

export default function GenerationRadio({ value }: PropsType) {
    const [radioNumber, setRadioNumber] = useRecoilState(radioState);

    return (
        <Button
            title={`${value}기`}
            onClick={() => setRadioNumber(value)}
        />
    )
}
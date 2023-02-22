import * as S from './style';

interface PropsType {
  title: string;
  color: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ title, color, onClick }: PropsType) {
  return (
    <S.Button onClick={onClick} color={color}>
      {title}
    </S.Button>
  );
}

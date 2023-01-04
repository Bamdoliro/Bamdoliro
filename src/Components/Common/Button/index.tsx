import * as S from './style';

interface PropsType {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ title, onClick }: PropsType) {
  return <S.Button onClick={onClick}>{title}</S.Button>;
}

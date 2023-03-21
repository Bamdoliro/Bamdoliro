import { color } from 'styles/theme';
import * as T from 'styles/text';
import * as S from './style';

interface PropsType {
  title: string;
  desc: string;
}

export default function TitleWrap({ title, desc }: PropsType) {
  return (
    <S.Wrap>
      <T.SubTitle color={color.gray03}>{title}</T.SubTitle>
      <S.Desc>
        {desc.split('\n').map((dsc) => (
          <>
            {dsc}
            <br />
          </>
        ))}
      </S.Desc>
    </S.Wrap>
  );
}

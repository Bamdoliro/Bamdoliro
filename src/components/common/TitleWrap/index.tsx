import { color } from 'shared/styles/theme';
import * as T from '../../../shared/styles/text';
import * as S from './style';

interface TypeProps {
  title: string;
  desc: string;
}

export default function TitleWrap({ title, desc }: TypeProps) {
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

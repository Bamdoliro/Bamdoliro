import * as T from 'shared/styles/text';
import { color } from 'shared/styles/theme';
import * as S from './style';

interface PropsType {
  date: string;
  desc: string;
}

export default function HistoryText({ date, desc }: PropsType) {
  return (
    <S.TextFrame>
      <S.DateFrame>
        <T.BodyText color={color.gray03}>{date}</T.BodyText>
      </S.DateFrame>
      <S.DescFrame>
        <T.BodyText color={color.gray03}>
          {desc.split('\n').map((dsc) => (
            <>
              {dsc}
              <br />
            </>
          ))}
        </T.BodyText>
      </S.DescFrame>
    </S.TextFrame>
  );
}

import * as T from '../../../shared/styles/text';
import * as S from './style';

interface TypeProps {
  title: string;
  desc: string;
}

export default function TitleWrap({ title, desc }: TypeProps) {
  return (
    <S.Wrap>
      <T.SubTitle color="#545F68">{title}</T.SubTitle>
      <S.TextArea>  
        <T.TitleOne color="#1E2E3D">
          {desc.split('\n').map((dsc) => (
            <>
              {dsc}
              <br />
            </>
          ))}
        </T.TitleOne>
      </S.TextArea>
    </S.Wrap>
  );
}

import TitleWrap from 'components/common/TItleWrap';
import Button from 'components/common/Button';
import { color } from 'shared/styles/theme';
import * as S from './style';

export default function History() {
  return (
    <S.History>
      <S.InnerFrame>
        <TitleWrap
          title="밤돌이로 연혁"
          desc={'밤돌이로의\n발자취를 만나보세요'}
        />
        <S.TabBar>
          <Button
            title="2022"
            color={color.gray04}
            onClick={() => console.log('클릭')}
          />
          <Button
            title="2023"
            color={color.gray02}
            onClick={() => console.log('클릭')}
          />
          <Button
            title="2024"
            color={color.gray02}
            onClick={() => console.log('클릭')}
          />
        </S.TabBar>
      </S.InnerFrame>
    </S.History>
  );
}

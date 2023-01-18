import TitleWrap from 'components/common/TItleWrap';
import Button from 'components/common/Button';
import { color } from 'shared/styles/theme';
import { useState } from 'react';
import * as S from './style';

export default function History() {
  const [TabBtnClick, setTabBtnClick] = useState({
    btnOne: true,
    btnTwo: false,
    btnThree: false,
  });

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
            color={TabBtnClick.btnOne ? color.gray04 : color.gray02}
            onClick={() =>
              setTabBtnClick({
                btnOne: true,
                btnTwo: false,
                btnThree: false,
              })
            }
          />
          <S.Line />
          <Button
            title="2023"
            color={TabBtnClick.btnTwo ? color.gray04 : color.gray02}
            onClick={() =>
              setTabBtnClick({
                btnOne: false,
                btnTwo: true,
                btnThree: false,
              })
            }
          />
          <S.Line />
          <Button
            title="2024"
            color={TabBtnClick.btnThree ? color.gray04 : color.gray02}
            onClick={() =>
              setTabBtnClick({
                btnOne: false,
                btnTwo: false,
                btnThree: true,
              })
            }
          />
        </S.TabBar>
      </S.InnerFrame>
    </S.History>
  );
}

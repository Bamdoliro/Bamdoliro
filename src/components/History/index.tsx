/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import TitleWrap from 'components/common/TItleWrap';
import Button from 'components/common/Button';
import HistoryText from 'components/common/HistoryText';
import { color } from 'shared/styles/theme';
import { useEffect, useState } from 'react';
import * as Y from 'data/year';
import * as T from 'shared/styles/text';
import * as S from './style';

export default function History() {
  const [isBtnEvent, setBtnEvent] = useState([true, false, false]);
  const [year, setYear] = useState('2022');

  // 이 부분 심각하게 가독성이 안좋음
  const isTabData =
    year === '2022'
      ? Y.Data22
      : year === '2023'
      ? Y.Data23
      : year === '2024'
      ? Y.Data24
      : '';

  const TabBarData = [
    {
      year: '2022',
      name: 'btnOne',
      set: [true, false, false],
    },
    {
      year: '2023',
      name: 'btnTwo',
      set: [false, true, false],
    },
    {
      year: '2024',
      name: 'btnThree',
      set: [false, false, true],
    },
  ];
  return (
    <S.History>
      <S.InnerFrame>
        <TitleWrap
          title="밤돌이로 연혁"
          desc={'밤돌이로의\n발자취를 만나보세요'}
        />
        <S.TabBar>
          {TabBarData.map((item, index) => {
            return (
              <>
                <Button
                  title={item.year}
                  color={isBtnEvent[index] ? color.gray04 : color.gray02}
                  onClick={() => {
                    setBtnEvent(item.set);
                    setYear(item.year);
                  }}
                />
                {index === TabBarData.length - 1 ? '' : <S.WidthLine />}
              </>
            );
          })}
        </S.TabBar>
        <S.HistoryFrame>
          <S.Year>
            <T.TitleOne color={color.gray04}>{year}</T.TitleOne>
          </S.Year>
          <S.HistoryTextFrame>
            {isTabData &&
              isTabData.map((item, index) => {
                return (
                  <HistoryText
                    key={index}
                    date={item.date}
                    desc={item.content}
                  />
                );
              })}
          </S.HistoryTextFrame>
          {/* 선 */}
          <S.HistoryLine>
            <S.Round />
            <S.HeightLine />
          </S.HistoryLine>
        </S.HistoryFrame>
      </S.InnerFrame>
    </S.History>
  );
}

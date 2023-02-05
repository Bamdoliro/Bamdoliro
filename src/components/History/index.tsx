import TitleWrap from 'components/common/TitleWrap';
import Button from 'components/common/Button';
import HistoryText from 'components/common/HistoryText';
import { color } from 'shared/styles/theme';
import { useState } from 'react';
import HistoryData from 'data/HistoryData.json';
import * as S from './style';

export default function History() {
  const [isBtnEvent, setBtnEvent] = useState([true, false, false]);
  const [year, setYear] = useState('2022');
  const [index, setIndex] = useState(0);

  const TabBarData = [
    {
      id: 0,
      year: '2022',
      set: [true, false, false],
      index: 0,
    },
    {
      id: 1,
      year: '2023',
      set: [false, true, false],
      index: 1,
    },
    {
      id: 2,
      year: '2024',
      set: [false, false, true],
      index: 2,
    },
  ];
  return (
    <S.History id="1">
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
                  key={item.id}
                  title={item.year}
                  color={isBtnEvent[index] ? color.gray04 : color.gray02}
                  onClick={() => {
                    setBtnEvent(item.set);
                    setYear(item.year);
                    setIndex(item.index);
                  }}
                />
                {index === TabBarData.length - 1 ? '' : <S.WidthLine />}
              </>
            );
          })}
        </S.TabBar>
        <S.HistoryFrame>
          <S.Year>{year}</S.Year>
          <S.HistoryTextFrame>
            {HistoryData.data[index].event.map((item, index) => {
              return (
                <HistoryText
                  key={item.id}
                  date={item.date}
                  desc={item.content}
                />
              );
            })}
          </S.HistoryTextFrame>
          <S.HistoryLine>
            <S.Round />
            <S.HeightLine />
          </S.HistoryLine>
        </S.HistoryFrame>
      </S.InnerFrame>
    </S.History>
  );
}

import TitleWrap from 'components/common/TitleWrap';
import Button from 'components/common/Button';
import HistoryText from 'components/common/HistoryText';
import { color } from 'shared/styles/theme';
import { useState } from 'react';
import history from 'data/history.json';
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
    <S.Container id="1">
      <S.Wrap>
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
                {index === TabBarData.length - 1 ? '' : <S.WidthLine/>}
              </>
            );
          })}
        </S.TabBar>
        <S.HistoryFrame>
          <S.HistoryTextFrame>
            {history.data[index].event.map((item) => {
              return (
                <HistoryText
                  key={item.id}
                  date={item.date}
                  desc={item.content}
                />
              );
            })}
          </S.HistoryTextFrame>
        </S.HistoryFrame>
        <S.HistoryLine>
          <S.Year>{year}</S.Year>
          <S.Round/>
          <S.HeightLine/>
        </S.HistoryLine>
      </S.Wrap>
    </S.Container>
  );
}

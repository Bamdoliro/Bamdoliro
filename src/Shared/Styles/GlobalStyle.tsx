import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from '../../Fonts/Pretendard-Bold.woff';
import PretendardSemiBold from '../../Fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../../Fonts/Pretendard-Medium.woff';

const GlobalStyled = createGlobalStyle`
    // css 초기값 정의
    ${reset}

    // 따로 스타일링
    @font-face {
        font-family: 'PretendardBold';
        src: local('PretendardBold'), local('PretendardBold');
        font-style: normal;
        src: url(${PretendardBold}) format('woff');
  }
  @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold'), local('PretendardSemiBold');
        font-style: normal;
        src: url(${PretendardSemiBold}) format('woff');
  }
  @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), local('PretendardMedium');
        font-style: normal;
        src: url(${PretendardMedium}) format('woff');
  }

`;

export default GlobalStyled;

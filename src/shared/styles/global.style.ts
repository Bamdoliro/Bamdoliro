import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from '../../fonts/Pretendard-Bold.woff';
import PretendardSemiBold from '../../fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../../fonts/Pretendard-Medium.woff';

const GlobalStyled = createGlobalStyle`

  ${reset}

  ;

  * {
    font-family: 'PretendardMedium';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, p,pre {
    line-height: 135%;
    letter-spacing: -1%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  // 폰트
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

  .fp-watermark {
    display: none !important;
  }

  .fp-watermark > a {
    display: none !important;
  }
`;

export default GlobalStyled;

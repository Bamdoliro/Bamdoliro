import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
    // css 초기값 정의
    ${reset}

    // 따로 스타일링
    // 신준서가 디자인 넘겨 줘야 함
`;

export default GlobalStyled;

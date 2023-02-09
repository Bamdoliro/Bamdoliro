import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import GlobalStyled from './shared/styles/global.style';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RecoilRoot>
    <App />
    <GlobalStyled />
  </RecoilRoot>,
);

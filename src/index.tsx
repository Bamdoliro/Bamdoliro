import ReactDOM from 'react-dom/client';
import GlobalStyled from './shared/styles/global.style';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <RecoilRoot>
      <App />
      <GlobalStyled />
    </RecoilRoot>
);

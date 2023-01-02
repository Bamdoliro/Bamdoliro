import ReactDOM from 'react-dom/client';
import GlobalStyled from './shared/styles/global.style';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <App />
    <GlobalStyled />
  </>,
);

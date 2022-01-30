import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import 'tw-elements';

import { App } from 'app';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
);

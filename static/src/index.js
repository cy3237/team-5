import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

import './assets/style/main.scss';

render(<App name='World' />, document.getElementById('root'));

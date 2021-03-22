import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import GithubState from './context/github/GithubState';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  
    <GithubState>
      <App />
    </GithubState>
,
  document.getElementById('root')
);

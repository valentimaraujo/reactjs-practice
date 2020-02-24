import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import './app-assets/vendors/css/vendors.min.css'
import './app-assets/css/bootstrap.min.css'
import './app-assets/css/bootstrap-extended.min.css'

import './app-assets/css/colors.min.css'
import './app-assets/css/components.min.css'
import './app-assets/css/themes/dark-layout.min.css'
import './app-assets/css/themes/semi-dark-layout.min.css'

ReactDOM.render(<App/>, document.getElementById('root'));

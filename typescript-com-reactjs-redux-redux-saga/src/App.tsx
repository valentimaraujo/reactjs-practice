import React from 'react';
import { Provider } from 'react-redux';

import RespositoryList from './components/RepositoryList';

import store from './store';

const App = () => <Provider store={store}><RespositoryList /></Provider>;
export default App;

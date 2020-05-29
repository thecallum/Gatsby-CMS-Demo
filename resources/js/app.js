import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

import { Provider } from 'react-redux'

import store from './redux/store'

// Add redux Thunk. 

// Maybe research other related libraries


const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('app'));

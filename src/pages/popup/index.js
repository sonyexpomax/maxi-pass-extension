import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Store, applyMiddleware } from 'webext-redux';
import App from './App';

const store = new Store({
    portName: 'MAXI_PASS',
});

const middleware = [thunkMiddleware];
const storeWithMiddleware = applyMiddleware(store, ...middleware);

storeWithMiddleware.ready().then(() => {
    const mountNode = document.createElement('div');
    mountNode.className = "mpe-popup";
    document.body.appendChild(mountNode);

    ReactDOM.render(
        <Provider store={storeWithMiddleware}>
            <App />
        </Provider>,
        mountNode,
    );
});

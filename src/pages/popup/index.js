// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
// import { Store, applyMiddleware } from 'webext-redux';
//
// const store = new Store({
//     portName: 'MAXI_PASS',
// });
//
// const middleware = [thunkMiddleware];
// const storeWithMiddleware = applyMiddleware(store, ...middleware);
//
// storeWithMiddleware.ready().then(() => {
//     const mountNode = document.createElement('div');
//     mountNode.className = "mpe-popup";
//     document.body.appendChild(mountNode);
//
//     ReactDOM.render(
//         <Provider store={storeWithMiddleware}>
//             <App />
//         </Provider>,
//         mountNode,
//     );
// });


import React from 'react';
import ReactDOM from 'react-dom';

import { StoreContext } from 'redux-react-hook';
import { createUIStore } from 'redux-webext';
import App from './App';

// async function init() {
// const store = createUIStore();

// ReactDOM.render(
//     <StoreContext.Provider value={store}>
//         <App />
//     </StoreContext.Provider>,
//     document.querySelector('#app'),
// );
// }

// init();

// storeWithMiddleware.ready().then(() => {
//     const mountNode = document.createElement('div');
//     mountNode.className = "mpe-popup";
//     document.body.appendChild(mountNode);
//
//     ReactDOM.render(
//         <Provider store={storeWithMiddleware}>
//             <App />
//         </Provider>,
//         mountNode,
//     );
// });

async function initApp() {
    const store = await createUIStore();

    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>,
        document.querySelector('#app'),
    );
}

initApp();

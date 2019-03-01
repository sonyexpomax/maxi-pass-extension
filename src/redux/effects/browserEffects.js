import watch from 'redux-watch';

export default function (store) {
    const watcher = watch(store.getState, 'channel.channel');

    return watcher((newVal) => {
        console.log('newVal');
        console.log(newVal);
        if (newVal) {
            chrome.browserAction.setTitle({
                title: chrome.i18n.getMessage('browserActionOnlineTitle'),
            });
            chrome.browserAction.setIcon({
                path: {
                    48: '/images/arma-48.png',
                    96: '/images/arma-96.png',
                },
            });
        } else {
            chrome.browserAction.setTitle({
                title: chrome.i18n.getMessage('browserActionOfflineTitle'),
            });
            chrome.browserAction.setIcon({
                path: {
                    48: '/images/arma-48-gs.png',
                    96: '/images/arma-96-gs.png',
                },
            });
        }
    });
}

// import watch from 'redux-watch';
//
// const browserEffects = (store) => {
//     const watcher = watch(store.getState, 'channel.channel');
//
//     return watcher((newVal, oldVal) => {
//         console.log(newVal);
//         // if (newVal) {
//         //     chrome.browserAction.setTitle({
//         //         title: chrome.i18n.getMessage('browserActionOnlineTitle'),
//         //     });
//         //     chrome.browserAction.setIcon({
//         //         path: {
//         //             48: '/images/arma-48.png',
//         //             96: '/images/arma-96.png',
//         //         },
//         //     });
//         // } else {
//         //     chrome.browserAction.setTitle({
//         //         title: chrome.i18n.getMessage('browserActionOfflineTitle'),
//         //     });
//         //     chrome.browserAction.setIcon({
//         //         path: {
//         //             48: '/images/arma-48-gs.png',
//         //             96: '/images/arma-96-gs.png',
//         //         },
//         //     });
//         // }
//     });
// };
//
// export default browserEffects;

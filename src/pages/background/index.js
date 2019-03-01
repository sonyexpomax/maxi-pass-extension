import store from './store';
// import { getChannel } from './actions';
import browserEffects from '../../redux/effects/browserEffects';

// ## //

// const interval = 15 * 1000
// const poll = () => store.dispatch(getChannel())

store.subscribe(browserEffects(store));


// setInterval(poll, interval)
// poll()


// import store from './store'
// import {getChannel} from './actions'
// import {applyBrowserAction, applyNotifications} from './effects'
//
// // ## //
//
// const interval = 15 * 1000
// const poll = () => store.dispatch(getChannel())
//
// store.subscribe(applyBrowserAction(store))
// store.subscribe(applyNotifications(store))
//
// setInterval(poll, interval)
// poll()
//


// import { createStore } from 'redux';
// import { wrapStore } from 'webext-redux';
// import reducer from '../../redux/reducers';
// import browserEffects from '../../redux/effects/browserEffects';
//
// const store = createStore(reducer, {});
//
// store.subscribe(browserEffects(store));
//
// wrapStore(store, { portName: 'MAXI_PASS' });


// Object.defineProperty(console, '_commandLineAPI', { get : function() { throw 'Nooo!' } })

// chrome.runtime.onMessage.addListener(
//     (request, sender, sendResponse) => {
//         console.log(sender.tab
//             ? `from a content script:${sender.tab.url}`
//             : "from the extension");
//         if (request.greeting == "hello") {
//             let tablink;
//             chrome.tabs.getCurrent(function (tab) {
//                 //Your code below...
//                 var tabUrl = encodeURIComponent(tab.url);
//                 var tabTitle = encodeURIComponent(tab.title);
//                 var myNewUrl = "https://www.mipanga.com/Content/Submit?url=" + tabUrl + "&title=" + tabTitle;
//
//                 //Update the url here.
//                 chrome.tabs.update(tab.id, {url: myNewUrl});
//             });
//             sendResponse({ farewell: tablink });
//         }
//     },
// );

// chrome.runtime.onMessage.addListener(
//     (request, sender, sendResponse) => {
//         console.log(sender.tab
//             ? `from a content script:${sender.tab.url}`
//             : "from the extension");
//         if (request.greeting == "hello") {
//             let tablink;
//             chrome.tabs.getSelected(null, (tab) => {
//                 tablink = tab;
//             });
//             sendResponse({ farewell: tablink });
//         }
//     },
// );

// chrome.browserAction.onClicked.addListener((tab) => {
//     // No tabs or host permissions needed!
//     console.log('Turning ' + tab.url + ' red!');
//     chrome.f.tabs.executeScript({
//         code: 'document.body.style.backgroundColor="red"'
//     });
// });
//
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });
//
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });
//
// // This will run when a bookmark is created.
// chrome.bookmarks.onCreated.addListener(function() {
//    alert('bookmarks')
// });
//
// chrome.webNavigation.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]});

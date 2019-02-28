import { createStore } from 'redux';
import { wrapStore } from 'webext-redux';
import reducer from '../../redux/reducers';

const store = createStore(reducer, {});

wrapStore(store, { portName: 'MAXI_PASS' });

// Object.defineProperty(console, '_commandLineAPI', { get : function() { throw 'Nooo!' } })

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

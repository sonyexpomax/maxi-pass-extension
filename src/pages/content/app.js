import './index.css';
import React from 'react';
import { connect } from "react-redux";
import * as pageActions from '../../redux/actions/pageActions';

@connect((store) => {
    console.log('=========== store ============');
    console.log(store);
    return {
        lists: store.lists,
    };
})

class App extends React.Component {
    aa = () => {
        // var signin = document.querySelector('#signin');
        document.body.addEventListener('click', (e) => {
            if (window.PasswordCredential || window.FederatedCredential) {
                navigator.credentials.get({
                    password: true,
                    federated: {
                        providers: [
                            'https://accounts.google.com',
                        ],
                    },
                    mediation: 'optional',
                }).then((c) => {
                    console.log(c);
                }).catch((error) => {
                    console.log(error);
                });
            }
        });
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(pageActions.setInfo(window.location));
        this.aa();
    }

    getActiveTab = () => {
        let tablink;
        chrome.tabs.getSelected(null, (tab) => {
            tablink = tab.url;
        });
        console.log(tablink);
    }

    sendMessage = () => {
        chrome.runtime.sendMessage({ greeting: "hello" }, (response) => {
            console.log(response.farewell);
        });
    }


    setDefaultPassword = () => {
        const defaultEmail = 'kesler@infusemedia.com';
        const defaultPassword = 'INFUSE999media@';

        const passwordNode = document.querySelector('input[type=password]');
        if (passwordNode) {
            console.log(passwordNode);
            // passwordNode.setAttribute("autocomplete", "false");
            passwordNode.setAttribute("value", defaultPassword);
            passwordNode.setAttribute("disabled", "");
            // window.alert(passwordNode);


            const usernameNode = document.querySelector('input[type=text], input[name="username"]');
            if (usernameNode) {
                console.log(usernameNode);
                // usernameNode.setAttribute("autocomplete", "false");
                usernameNode.setAttribute("value", defaultEmail);
                usernameNode.setAttribute("disabled", "");
            }

            const userNode = document.querySelector('input[type=text], input[name="user"]');
            if (userNode) {
                console.log(userNode);
                // userNode.setAttribute("autocomplete", "false");
                userNode.setAttribute("value", defaultEmail);
                userNode.setAttribute("disabled", "");
            }

            const emailNode = document.querySelector('input[type=email]');
            if (emailNode) {
                console.log(emailNode);
                // emailNode.setAttribute("autocomplete", "false");
                emailNode.setAttribute("value", defaultEmail);
                emailNode.setAttribute("disabled", "");
            }
        }
    };

    render() {
        // const { lists } = this.props;
        return (
            <div className="mpe-content__app">
                {/*{this.removeConsole()}*/}
                <p>Content</p>
                {this.setDefaultPassword()}
                {/*<div>*/}
                   {/*lists: */}
                    {/*{' '}*/}
                    {/*{lists.records.map(record => (<p>{record}</p>))}*/}
                {/*</div>*/}
                <button onClick={this.sendMessage}>send message</button>
            </div>
        );
    }
}

export default App;

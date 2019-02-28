import './app.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from "prop-types";
import LoginPage from './LoginPage';
import MainMenu from './MainMenu';

@connect((store) => {
    console.log(`%cStore`, "color:black; background:#f4f4f5; font-size: 13pt");
    console.log(store);
    return {
        isSignIn: store.user.isSignIn,
    };
})

class App extends React.Component {
    static propTypes = {
        isSignIn: PropTypes.bool,
    };

    render() {
        const { isSignIn } = this.props;
        return (
            <div className="mpe-popup-main">
                <Image src='../MaxiLogo.png' size='small' centered/>
                {isSignIn ? <MainMenu/> : <LoginPage/>}
            </div>
        );
    }
}

export default App;

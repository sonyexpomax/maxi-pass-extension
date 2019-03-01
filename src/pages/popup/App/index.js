// import './App.scss';
import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import PropTypes from "prop-types";
import LoginPage from '../LoginPage/LoginPage';
import MainMenu from '../MainMenu/MainMenu';

//
// @connect((store) => {
//     console.log(`%cStore`, "color:black; background:#f4f4f5; font-size: 13pt");
//     console.log(store);
//     return {
//         isSignIn: store.user.isSignIn,
//     };
// })

const propTypes = {
    isSignIn: PropTypes.bool,
};

const App = () => {
    const mapState = useCallback(
        state => ({
            isSignIn: state.user.isSignIn,
        }),
        [],
    );
    const { isSignIn } = useMappedState(mapState);

    return (
        <div className="mpe-popup-main">
            <Image src='images/MaxiLogo.png' size='small' centered/>
            {isSignIn ? <MainMenu/> : <LoginPage/>}
        </div>
    );
};
App.propTypes = propTypes;

export default App;

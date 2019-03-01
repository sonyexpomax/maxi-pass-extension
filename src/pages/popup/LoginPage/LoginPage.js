// import './LoginPage.scss';
import React, { useCallback, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
// import PropTypes from "prop-types";
import { useDispatch } from 'redux-react-hook';
import { changeUrl } from '../../../redux/actions/pageActions';

// const propTypes = {
//     // signIn: PropTypes.func.isRequired,
// };

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [team, setTeam] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidTeam, setIsValidTeam] = useState(false);

    const dispatch = useDispatch();
    const setSignIn = useCallback(data => dispatch(changeUrl(data)), []);

    const handleChangeTeam = ({ target }) => {
        setTeam(target.value);
        setIsValidTeam(!!(target.value && target.value.length > 2));
    };

    const handleChangePassword = ({ target }) => {
        setPassword(target.value);
        setIsValidPassword(!!(target.value && target.value.length > 2));
    };

    const handleChangeEmail = ({ target }) => {
        setEmail(target.value);
        setIsValidEmail(!!(target.value && target.value.length > 2));
    };

    const handleSingIn = () => {
        if (isValidPassword && isValidEmail && isValidTeam) {
            setSignIn({ team_name: team, email, password });
        }
    };

    return (
        <div className="mpe-popup-login">
            <Form onSubmit={handleSingIn}>
                <Form.Field>
                    <label htmlFor="team" className="mpe-popup-login__label">Team name</label>
                    <input id="team" type='text' placeholder='Enter team name...' onChange={handleChangeTeam} value={team}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="email" className="mpe-popup-login__label">Email</label>
                    <input id="email" type='email' placeholder='Enter email...' onChange={handleChangeEmail} value={email}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password" className="mpe-popup-login__label">Password</label>
                    <input id="password" type='password' placeholder='Enter password...' onChange={handleChangePassword} value={password}/>
                </Form.Field>
                <Button
                    className="mpe-popup-login__button"
                    type='submit'
                    positive
                    disabled={!(isValidPassword && isValidEmail && isValidTeam)}
                >
                    Sign in
                </Button>
            </Form>
        </div>
    );
};

// LoginPage.propTypes = propTypes;

export default LoginPage;

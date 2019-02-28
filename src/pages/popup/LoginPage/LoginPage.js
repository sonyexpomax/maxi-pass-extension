import './LoginPage.scss';
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from "prop-types";

export default class LoginPage extends React.Component {
    static propTypes = {
        signIn: PropTypes.func.isRequired,
    };

    state = {
        password: '',
        email: '',
        team: '',
        isValidData: { password: false, team: false },
        isValidEmail: false,
    };

    handleChangeData = ({ target }) => {
        const { isValidData } = this.state;
        this.setState({
            [target.id]: target.value,
            isValidData: { ...isValidData, [target.id]: !!(target.value && target.value.length > 2) },
        });
    };

    handleChangeEmail = ({ target }) => {
        this.setState({
            email: target.value,
            isValidEmail: !!(target.value && target.value.length > 2),
        });
    };

    handleSingIn = () => {
        const { signIn } = this.props;
        const { pass, email, team, isValidData, isValidEmail } = this.state;
        if (isValidData.password && isValidEmail && isValidData.team) {
            signIn({ team_name: team, email, password: pass });
        }
    };

    render() {
        const { password, email, team, isValidData, isValidEmail } = this.state;
        return (
            <div className="mpe-popup-login">
                <Form onSubmit={this.handleSingIn}>
                    <Form.Field>
                        <label htmlFor="team" className="mpe-popup-login__label">Team name</label>
                        <input id="team" type='text' placeholder='Enter team name...' onChange={this.handleChangeData} value={team}/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="email" className="mpe-popup-login__label">Email</label>
                        <input id="email" type='email' placeholder='Enter email...' onChange={this.handleChangeEmail} value={email}/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password" className="mpe-popup-login__label">Password</label>
                        <input id="password" type='password' placeholder='Enter password...' onChange={this.handleChangeData} value={password}/>
                    </Form.Field>
                    <Button
                        className="mpe-popup-login__button"
                        type='submit'
                        positive
                        disabled={!(isValidData.password && isValidEmail && isValidData.team)}
                    >
                        Sign in
                    </Button>
                </Form>
            </div>
        );
    }
}

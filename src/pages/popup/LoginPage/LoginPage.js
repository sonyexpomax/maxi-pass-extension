import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from "prop-types";

export default class LoginPage extends React.Component {
    static propTypes = {
        signIn: PropTypes.func.isRequired,
    };

    state = {
        pass: '',
        email: '',
        team: '',
    }

    handleChangePassword = ({ target }) => {
        this.setState({ pass: target.value });
    }

    handleChangeEmail = ({ target }) => {
        this.setState({ email: target.value });
    }

    handleTeam = ({ target }) => {
        console.log(target.value);
        this.setState({ team: target.value });
    }

    handleSingIn = () => {
        const { signIn } = this.props;
        const { pass, email, team } = this.state;
        console.log('handleSingIn');
        console.log(team, email, pass);
        signIn({ team, email, password: pass });
    }

    render() {
        const { pass, email, team } = this.state;
        console.log('render login page');
        return (
            <div className="ddd">
                <Form onSubmit={this.handleSingIn}>
                    <Form.Field>
                        <label>Team name</label>
                        <input type='text' placeholder='Enter team name' onChange={this.handleTeam} value={team}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type='email' placeholder='Enter email' onChange={this.handleChangeEmail} value={email}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' placeholder='Enter password' onChange={this.handleChangePassword} value={pass}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

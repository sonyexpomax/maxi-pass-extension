// import './MainMenu.scss';
import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from "prop-types";

export default class LoginItem extends React.Component {
    static propTypes = {
        login: PropTypes.object.isRequired,
        onChangeRoute: PropTypes.func.isRequired,
    };

    state = {
        open: false,
    };

    render() {
        const { login, onChangeRoute } = this.props;
        console.log('login = ')
        console.log(login)
        const isMultiple = login.logins.length > 1;
        return (
            <div className="mpe-popup-loginsItem">
                {isMultiple
                    ? (
                        <div className="mpe-popup-loginsItem__multiple">
                            <div>{login.url}</div>
                            {(login.logins && login.logins.length > 0) && (
                                <div className="mpe-popup-loginsItem__multiple-block">
                                    {login.logins.map(item => (
                                        <div
                                            key={item.id}
                                            className="mpe-popup-loginsItem__multiple-block-item"
                                            onClick={() => onChangeRoute(item.id)}
                                        >
                                            <p>{item.name}</p>
                                            <Icon name="angle double right"/>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                    : (
                        <div className="mpe-popup-loginsItem__single" onClick={() => this.handleClick(login.logins[0])}>
                            <div>{login.logins[0].name}</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

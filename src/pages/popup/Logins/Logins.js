// import './MainMenu.scss';
import React from 'react';
// import { Segment, Grid, Menu } from 'semantic-ui-react';
import PropTypes from "prop-types";
import LoginItem from './LoginItem';

export default class Logins extends React.Component {
    static propTypes = {
        getLogins: PropTypes.func.isRequired,
        changeUrl: PropTypes.func.isRequired,
        logins: PropTypes.array,
        isLoading: PropTypes.bool,
    };

    state = {
        activeItem: 'Logins',
    };

    componentDidMount() {
        const { getLogins } = this.props;
        getLogins();
    }

    handleChangeRoute = (passId, url) => {
        const { changeUrl } = this.props;
        console.log(passId, url);
        changeUrl({passId, url});
    };

    render() {
        const { logins } = this.props;
        return (
            <div className="mpe-popup-logins">
                {(logins && logins.length > 0)
                    ? logins.map(item => (
                        <LoginItem
                            key={item.id}
                            login={item}
                            onChangeRoute={passId => this.handleChangeRoute(passId, item.url)}
                        />
                    ))
                    : <div>No Logins</div>
                }
            </div>
        );
    }
}

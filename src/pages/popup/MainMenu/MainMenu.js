import './MainMenu.scss';
import React from 'react';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import PropTypes from "prop-types";
import MainMenuItem from './MainMenuItem';

export default class MainMenu extends React.Component {
    static propTypes = {
        logOut: PropTypes.func.isRequired,
    };

    state = {
        activeItem: 'Logins',
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        const { logOut } = this.props;
        return (
            <div className="mpe-popup-menu">
                <Grid>
                    <Grid.Column width={6} className="mpe-popup-menu__column">
                        <Menu fluid vertical tabular>
                            <MainMenuItem onSelect={this.handleItemClick} active={activeItem} name='Logins' />
                            <MainMenuItem onSelect={this.handleItemClick} active={activeItem} name='Recent used logins' />
                            <MainMenuItem onSelect={logOut} active={activeItem} name='Logout' />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={10} className="mpe-popup-menu__column-right">
                        <Segment>
                            This is an stretched grid column. This segment will always match the tab height
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    active: PropTypes.string,
};

const MainMenuItem = ({ onSelect, active, name }) => (
    <Menu.Item
        className={`mpe-popup-menu__column-item ${active === name ? 'active-item' : null}`}
        name={name}
        active={active === name}
        onClick={onSelect}
    />
);

MainMenuItem.propTypes = propTypes;

export default MainMenuItem;

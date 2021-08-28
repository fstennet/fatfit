import React from 'react';

import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';

import {
    Link
} from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    };

    onChangeHandler = (newValue) => {
        this.setState({ value: newValue })
    };

    render() {
        const { value } = this.state;
        return (
            <BottomNavigation
                value={value}
                onChange={(event, value) => this.onChangeHandler(value)}
                showLabels
            >
                <BottomNavigationAction label="Progreso" value="/" component={Link} to="/" icon={<TrendingUpIcon />} />
                <BottomNavigationAction label="Datos" value="/inputs" component={Link} to="/inputs" icon={<EditAttributesIcon />} />
            </BottomNavigation>
        );
    }
}
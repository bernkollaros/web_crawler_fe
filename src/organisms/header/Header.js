import React from 'react';
import {Cell, Icon, Nav} from '../../atoms';
import nuke from '../../static/nuke.svg'
import './Header.scss';

export const Header = (
    {
        id,
        area,
        className = '',
    }) =>
    <Cell
        id={id}
        area={area}
        className={`Header ${className}`}
    >
        <Icon
            id={'nukeIcon'}
            icon={nuke}
        />
        <Nav navLink={'/home'}/>
        <Nav navLink={'/aboutUs'}/>
    </Cell>;


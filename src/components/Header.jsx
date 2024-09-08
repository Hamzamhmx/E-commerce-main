import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav } from './Nav';
import { MainHeader } from './componentStyle';

export const Header = () => {
    return (
        <MainHeader>
            <NavLink>
                <img src="./images/logo.png" alt="my logo img" height={60} width={250} />
            </NavLink>
            <Nav />
        </MainHeader>
    )
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarWeb from '../components/web/NavBarWeb';
import FooterWeb from '../components/web/FooterWeb';

const LayoutWeb = () => {
    return (
        <div class="page-wraper">
            <NavBarWeb />
            <Outlet />
            <FooterWeb/>
        </div>
    );
}

export default LayoutWeb;

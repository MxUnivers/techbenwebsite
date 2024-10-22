import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarWeb from '../components/web/NavBarWeb';

const LayoutWeb = () => {
    return (
        <div class="page-wraper">
            <NavBarWeb />
            <Outlet />
        </div>
    );
}

export default LayoutWeb;

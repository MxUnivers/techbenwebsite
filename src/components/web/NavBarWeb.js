import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routing';

const NavBarWeb = () => {
    return (
        <header class="site-header header-style-3 topbar-transparent mobile-sider-drawer-menu ">

            {/* <div class="top-bar ">
                <div class="container bg-light text-dark ">
                    <div class="row">
                        <div class="clearfix">
                            <div class="wt-topbar-left">
                                <ul class="list-unstyled e-p-bx pull-left">
                                    <li><i class="fa fa-envelope"></i>mail@bitinvest.com</li>
                                    <li><i class="fa fa-phone"></i>(654) 321-7654</li>
                                </ul>
                            </div>

                            <div class="wt-topbar-right">
                                <div class=" language-select pull-right">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">Language
                                            <span class="caret"></span></button>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><Link to="#"><img src="images/united-states.png" alt="" />English</Link></li>
                                            <li><Link to="#"><img src="images/france.png" alt="" />French</Link></li>
                                            <li><Link to="#"><img src="images/germany.png" alt="" />German</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <ul class="list-unstyled e-p-bx pull-right">
                                    <li><Link to="#" data-bs-toggle="modal" data-bs-target="#Login-form"><i class="fa fa-user"></i>Login</Link></li>
                                    <li><Link to="#" data-bs-toggle="modal" data-bs-target="#Register-form"><i class="fa fa-sign-in"></i>Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="sticky-header main-bar-wraper ">
                <div class="main-bar bg-dark">
                    <div class="container">

                        <div class="logo-header mostion">
                            <Link to="index.html">
                                <img src="logoApplication.png" style={{ height: "50px", width: "50px" }} width="50" height="67" alt="" />
                            </Link>
                        </div>

                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar icon-bar-first"></span>
                            <span class="icon-bar icon-bar-two"></span>
                            <span class="icon-bar icon-bar-three"></span>
                        </button>
                        <div class="header-nav navbar-collapse collapse ">
                            <ul class=" nav navbar-nav">
                                <li class="active">
                                    <Link to="">Accueil</Link>
                                </li>
                                <li>
                                    <Link to={`/${ROUTES.Aboutus}`}>Présentation </Link>
                                </li>
                                <li>
                                    <Link to={`/${ROUTES.Services}`}>Services </Link>
                                </li>
                                <li>
                                    <Link to={`/${ROUTES.Blog}`}>Activités </Link>
                                </li>
                                <li class="submenu-direction">
                                    <Link to="javascript:;">Contact </Link>
                                </li>
                            </ul>
                        </div>

                        <div class="extra-nav">
                            <div class="extra-cell">
                                <Link to="#search" class="site-search-btn"><i class="fa fa-search"></i></Link>
                            </div>
                            <div class="extra-cell">
                                <Link to="javascript:;" class="wt-cart cart-btn dropdown-toggle" title="Your Cart" data-bs-toggle="dropdown">
                                    <span class="link-inner">
                                        <span class="woo-cart-total"> </span>
                                        <span class="woo-cart-count">
                                            <span class="shopping-bag wcmenucart-count ">2</span>
                                        </span>
                                    </span>
                                </Link>
                                <div class="dropdown-menu cart-dropdown-item-wraper">
                                    <div class="nav-cart-content">
                                        <div class="nav-cart-items p-a15">
                                            <div class="nav-cart-item clearfix">
                                                <div class="nav-cart-item-image">
                                                    <Link to="#"><img src="images/cart/pic-3.jpg" alt="p-1" /></Link>
                                                </div>
                                                <div class="nav-cart-item-desc">
                                                    <Link to="#">Product Three</Link>
                                                    <span class="nav-cart-item-price"><strong>2</strong> x $19.99</span>
                                                    <Link to="#" class="nav-cart-item-quantity">x</Link>
                                                </div>
                                            </div>
                                            <div class="nav-cart-item clearfix">
                                                <div class="nav-cart-item-image">
                                                    <Link to="#"><img src="images/cart/pic-4.jpg" alt="p-2" /></Link>
                                                </div>
                                                <div class="nav-cart-item-desc">
                                                    <Link to="#">Product Four</Link>
                                                    <span class="nav-cart-item-price"><strong>1</strong> x $24.99</span>
                                                    <Link to="#" class="nav-cart-item-quantity">x</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="nav-cart-title p-tb10 p-lr15 clearfix">
                                            <h4 class="pull-left m-a0">Subtotal:</h4>
                                            <h5 class="pull-right m-a0">$114.95</h5>
                                        </div>
                                        <div class="nav-cart-action p-a15 clearfix">
                                            <button class="site-button  btn-block m-b15 " type="button">View Cart</button>
                                            <button class="site-button  btn-block" type="button">Checkout </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="search">
                            <span class="close"></span>
                            <form role="search" id="searchform" action="/search" method="get" class="radius-xl">
                                <div class="input-group">
                                    <input value="" name="q" type="search" placeholder="Type to search" />
                                    <span class="input-group-btn"><button type="button" class="search-btn"><i class="fa fa-search"></i></button></span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}

export default NavBarWeb;

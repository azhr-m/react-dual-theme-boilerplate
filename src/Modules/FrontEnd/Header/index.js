import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";

import WebContext from '../../../Contexts/WebContext';

import './fe-header.scss';

import asset_dark from './../../../assets/images/icons/theme-dark.svg';
import asset_bright from './../../../assets/images/icons/theme-bright.svg';

const Header = () => {
    const webCtx = useContext(WebContext);
    const [currentTheme, setCurrentTheme] = useState(webCtx.appTheme);
    // const [currentLang, setCurrentLang] = useState(webCtx.appLang);

    const menuItems = [
        { title: 'Trainings', url: '/trainings' },
        { title: 'Partners', url: '/partners' },
        { title: 'Jobs', url: '/Jobs' },
        { title: 'Contact', url: '/Contact' },
    ];

    const switchTheme = () => {
        const previousTheme = webCtx.appTheme;
        const theme = (webCtx.appTheme === 'light-theme') ? 'dark-theme' : 'light-theme';
        document.body.classList.replace(previousTheme, theme);
        setCurrentTheme(theme);
        webCtx.switchTheme(theme);
    }

    // const switchLanguage = () => {
    //     const lang = (webCtx.appLang === 'en') ? 'bg' : 'en';
    //     setCurrentLang(lang);
    //     webCtx.switchLanguage(lang);
    // }


    return (
        <header id="header">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <div className="action-item">
                        <button className="square-btn toggle-theme" onClick={switchTheme}>
                            <span >
                                <img src={currentTheme === 'light-theme' ? asset_dark : asset_bright} alt="theme-icon" />
                            </span>
                        </button>
                    </div>

                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="logo me-auto">
                            {/* <img src="assets/img/logo-mytextbook.png" alt="logo-mytextbook"/> */}
                            <h4>Coderatrix</h4>
                        </div>

                        <nav className="coderatrix-menu d-none d-lg-flex">
                            {
                                menuItems.map((item) => (
                                    <NavLink className="menu-item my-2" activeClassName='active' to={item.url} key={item.url}>
                                        <span>{item.title}</span>
                                    </NavLink>
                                ))
                            }
                        </nav>
                    </div>

                    {/* <div className="action-item">
                        <button className="coderatrix-btn primary-button" onClick={switchLanguage}>
                            <span >
                                {currentLang === 'en' ? 'Bulgarian' : 'English'}
                            </span>
                        </button>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
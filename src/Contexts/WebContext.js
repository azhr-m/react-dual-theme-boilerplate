import React, { useState } from "react";
const WebContext = React.createContext({
    appTheme: '',
    appLang: '',
    authToken: '',
    isLoggedIn: false,
    currentPageHeading: '',
    currentUserName: '',
    currentUserType: '',
    pageHeading: (heading) => { },
    currentUser: (heading) => { },
    login: (token) => { },
    logout: () => { },
    switchTheme: () => { },
    switchLanguage: () => {}
});

export const WebContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme';
    const initialLang = localStorage.getItem('language') ? localStorage.getItem('language') : 'bg';
    const [theme, setTheme] = useState(initialTheme);
    const [lang, setLang] = useState(initialLang);

    const initialUser =  JSON.parse(localStorage.getItem('user'));
    const [token, setToken] = useState(initialToken);
    const [currentPageHeading, setCurrentPageHeading] = useState('');
    const [currentUserType, setCurrentUserType] = useState(initialUser);
    const userIsLoggedIn = !!token;
    
    const themeHandler = (th) => {
        console.log('THEME CHANGE-Context', th);

        setTheme(th);
        localStorage.setItem('theme', th);
    };

    const hangleLanguage = (lng) => {
        console.log('Change Lang', lng);
        setLang(lng);
        localStorage.setItem('language', lng);
    };

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHanlder = () => {
        setToken(null);
        setCurrentPageHeading('');
        setCurrentUserType(null);
        localStorage.clear();
    }
    const setPageHeading = (heading) => {
        setCurrentPageHeading(heading)
    }
    const setCurrentUser = (user) => {
        setCurrentUserType(user);
        localStorage.setItem('user', JSON.stringify(user));
        
    }
    const contextValue = {
        // token: token,
        // isLoggedIn: userIsLoggedIn,
        // currentPageHeading: currentPageHeading,
        // currentUserType: currentUserType,
        // pageHeading: setPageHeading,
        // currentUser: setCurrentUser,
        // login: loginHandler,
        // logout: logoutHanlder,
        appLang: lang,
        appTheme: theme,
        authToken: token,
        isLoggedIn: userIsLoggedIn,
        currentPageHeading: currentPageHeading,
        // currentUserName: currentUserName,
        currentUserType: currentUserType,
        pageHeading: setPageHeading,
        currentUser: setCurrentUser,
        login: loginHandler,
        logout: logoutHanlder,
        switchTheme: themeHandler,
        switchLanguage: hangleLanguage
    }
    return <WebContext.Provider value={contextValue}>{props.children}</WebContext.Provider>
};

export default WebContext;
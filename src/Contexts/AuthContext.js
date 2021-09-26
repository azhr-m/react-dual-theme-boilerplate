import React, { useState } from "react";
const AuthContext = React.createContext({
    authToken: '',
    isLoggedIn: false,
    currentPageHeading: '',
    currentUserName: '',
    currentUserType: '',
    pageHeading: (heading) => { },
    currentUser: (heading) => { },
    login: (token) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialUser =  JSON.parse(localStorage.getItem('user'));
    const [token, setToken] = useState(initialToken);
    const [currentPageHeading, setCurrentPageHeading] = useState('');
    const [currentUserType, setCurrentUserType] = useState(initialUser);
    const userIsLoggedIn = !!token;
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
        authToken: token,
        isLoggedIn: userIsLoggedIn,
        currentPageHeading: currentPageHeading,
        // currentUserName: currentUserName,
        currentUserType: currentUserType,
        pageHeading: setPageHeading,
        currentUser: setCurrentUser,
        login: loginHandler,
        logout: logoutHanlder,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};

export default AuthContext;
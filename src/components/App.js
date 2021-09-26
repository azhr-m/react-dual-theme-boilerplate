import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WebContext from '../Contexts/WebContext';

// import AuthContext from '../Contexts/AuthContext';

import asset_loader from './../assets/images/loader.svg';

const FrontEnd = React.lazy(() => import('./../Modules/FrontEnd'));
// const QualityAudit = React.lazy(() => import('./QualityAudit'));
// const Agent = React.lazy(() => import('./Agent'));

function App() {
    //   const authCtx = useContext(AuthContext)
    const webCtx = useContext(WebContext);
    useEffect(() => {        
        initializeTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initializeTheme = () => {
        document.body.classList.add(webCtx.appTheme);
    }



    const isWaiting = () => {
        return (
            <div className="lazy-loader">
                <img src={asset_loader} alt="Loading" />
            </div>
        );
    }

    return (
        <React.Suspense fallback={isWaiting()}>
            <Switch>
                <Route path="/">
                    <FrontEnd />
                </Route>
                {/* {!authCtx.isLoggedIn && (
                    <Route exact path="/login">
                        <FrontEnd />
                    </Route>
                )} */}
                {/* {authCtx.isLoggedIn ? authCtx.currentUserType ? authCtx.currentUserType.user_type === 1 ? <Route path="/agent" component={Agent}></Route> : '' : '' : ''} */}
                {/* {authCtx.isLoggedIn ? authCtx.currentUserType ? authCtx.currentUserType.user_type === 2 ? <Route path="/quality-audit" component={QualityAudit}></Route> : '' : '' : ''} */}

                {/* <Route path='*' exact>
                    {authCtx.isLoggedIn ? authCtx.currentUserType ? authCtx.currentUserType.user_type === 1 ? <Redirect to="/agent/dashboard" /> : '' : '' : ''}
                    {authCtx.isLoggedIn ? authCtx.currentUserType ? authCtx.currentUserType.user_type === 2 ? <Redirect to="/quality-audit/dashboard" /> : '' : '' : ''}
                    {!authCtx.isLoggedIn && <Redirect to="/login" />}
                </Route> */}
            </Switch>
        </React.Suspense>
    );
}

export default App;

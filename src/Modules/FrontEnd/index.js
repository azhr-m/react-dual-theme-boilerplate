import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Trainings from './Trainings';

const FrontEnd = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="render-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/trainings" exact component={Trainings} />
                    {/* <Route path="/quality-audit/call-history" exact component={CallHistory} />
                    <Route path="/quality-audit/call-history/:id" exact component={HistoryDetail} />
                    <Route path="/quality-audit/agents" exact component={Agents} />
                    <Route path="/quality-audit/agents/:agentId" exact component={Agent} /> */}
                </Switch>
            </div>
            <Footer/>
        </React.Fragment>
    );
};

export default FrontEnd;
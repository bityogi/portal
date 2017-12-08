import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ChairHome from '../components/dashboard/chairDashboard';
import Campaigns from '../components/campaigns';
import NewCampaign from '../components/campaign';

export default [
    <Route exact path="/chair/:orgId" component={ChairHome} />
    <Route exact path="/chair/:orgId/campaigns" component={Campaigns} />
    <Route exact path="/chair/:orgId/campaign/new" component={NewCampaign} />
];

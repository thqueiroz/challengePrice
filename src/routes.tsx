import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import FirstReport from './pages/FirstReport';
import SecondReport from './pages/SecondReport';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/first-report" component={FirstReport} />
      <Route path="/second-report" component={SecondReport} />
    </Switch>
  );
};

export default Routes;

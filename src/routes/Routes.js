import React from 'react';
import { Route, Switch } from 'react-router';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main/Main';
import Teams from '../components/Teams/Teams';

function index() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/teams" component={Teams} />
    </Switch>
  );
}

export default index;

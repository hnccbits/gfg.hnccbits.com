import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main/Main';
import Teams from '../components/Teams/Teams';

const Routes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={400}>
        <Switch location={location}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;

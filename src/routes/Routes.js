import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AboutUs from '../components/AboutUs';
import Main from '../components/Main/Main';
import Teams from '../components/Teams/Teams';

const Routes = () => {
	const location = useLocation();

	const routeDetails = [
		{ path: '/', Component: Main },
		{ path: '/about', Component: AboutUs },
		{ path: '/teams', Component: Teams },
	];

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames='fade' timeout={400} appear>
				<Switch location={location}>
					{routeDetails.map(({ path, Component }) => {
						return (
							<Route exact path={path} key={path}>
								<div className='fade'>
									<Component />
								</div>
							</Route>
						);
					})}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default Routes;

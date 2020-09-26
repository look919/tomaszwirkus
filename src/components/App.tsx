import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import { Nav } from './layout/Nav';
import { WelcomePage } from './welcomePage/WelcomePage';

// import { Skills } from './skills/Skills';
// import { Projects } from './projects/Projects';

export const App = () => (
  <BrowserRouter>
    <Fragment>
      <Nav />
      <Switch>
        <Route path='/' component={WelcomePage} exact={true} />
        {/* <Route path='/skills' component={SkillsPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={NotFoundPage} /> */}
      </Switch>
    </Fragment>
  </BrowserRouter>
);

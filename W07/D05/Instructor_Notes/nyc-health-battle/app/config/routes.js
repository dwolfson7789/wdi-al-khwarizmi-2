import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
/* routing */
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';

/* jsx router. tell our traffic cop where to send our traffic */
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
    </Route>
  </Router>

);

export default routes;

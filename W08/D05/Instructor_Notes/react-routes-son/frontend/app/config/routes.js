import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
/* routing */
import Main from '../components/Main';
import Home from '../components/Home';
import ListContainer from '../containers/ListContainer';
import AddContainer from '../containers/AddContainer';
import EditContainer from '../containers/EditContainer';
// Add "view taco?", so you can see what an individual taco looks like

/* jsx router. tell our traffic cop where to send our traffic */
const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='listTacos' component={ListContainer} />
      <Route path='addTaco' component={AddContainer} />
      <Route path='editTaco' component={EditContainer} />
    </Route>
  </Router>

);

export default routes;

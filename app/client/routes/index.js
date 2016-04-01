import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import Home from '../containers/home/Home';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

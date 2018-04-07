import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import Main from './containers/Main';
import MovieDetails from './containers/MovieDetails';
import store from './store/store';

WebFont.load({
  google: {
    families: ['Roboto:400,700', 'Lato:400, 600', 'sans-serif'],
  },
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
        <Switch>
          <Route path="/:id" component={MovieDetails}/>
          <Route path="/" component={Main}/>
        </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

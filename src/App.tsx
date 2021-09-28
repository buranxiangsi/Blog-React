import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import IndexHeader from './components/IndexHeader'
import IndexMain from './components/IndexMain'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <IndexHeader />
            <IndexMain />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


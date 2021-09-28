import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import IndexHeader from './components/IndexHeader'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <IndexHeader />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


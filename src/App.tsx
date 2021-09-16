import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CanvasContainer } from './features/rectangles/CanvasContainer';
import { Playground } from './features/rectangles/Playground';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Redirect exact from="/" to="/rectangles" />
            <Route path="/playground">
              <Playground />
            </Route>
            <Route path="/rectangles">
              <CanvasContainer />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Canvas } from './features/rectangles/Canvas';
import { Playground } from './features/rectangles/Playground';

function App() {
  return (
    <div className="App" style={{padding: '1em', background: "#ddd"}}>
      <Router>
        <Switch>
            <Route path="/playground">
              <Playground />
            </Route>
            <Route path="/">
              <Canvas />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

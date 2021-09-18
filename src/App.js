import React from "react";
import Capture from "./Capture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats'
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
        
        <Switch>
          <Route exact path="/">
            <Capture />
          </Route>
          <Route exact path="/chats">
            <Chats />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
            
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;

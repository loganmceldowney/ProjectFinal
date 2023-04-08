import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCardsWithButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function TinderCardsWithButtons() {
  return (
    <div>
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

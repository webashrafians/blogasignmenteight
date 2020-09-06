import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Postdetails from './components/Postdetails/Postdetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home"><Home/></Route>
        <Route path="/posts/:postId"><Postdetails/></Route>
        <Route exact path="/"><Home/></Route>s
        <Route path="*"><NoMatch/></Route>
      </Switch>
    </Router>
  );
}

export default App;

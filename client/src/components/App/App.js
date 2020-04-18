import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import './style.scss';


import Layout from '../Layout/Layout';
import ViewStats from "../ViewStats/ViewStats";



class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Layout}/>
          <Route path='/viewStats' component={ViewStats}/>
        </Switch>
      )}
}
export default App;

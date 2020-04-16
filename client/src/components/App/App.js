import React, { Component, Fragment } from "react";
import './style.scss';

import Header from '../Header/Header';
import LoveApp from '../LoveApp/LoveApp';



class App extends Component {
  render() {
    return (
      <Fragment>
            <Header />
            <LoveApp />
            {/* <Services />
            <OurProjects />
            <Footer /> */}
        </Fragment>
      )}
}
export default App;

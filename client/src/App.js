import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import CargoHeader from './components/CargoHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import CargoPage from './content/CargoPage';
import CargoBooking from './components/CargoBooking/CargoBooking.js';
import CargoRouting from './components/CargoRouting/CargoRouting';
import routingLandingPage from './components/CargoRouting/routingLandingPage.js';
import CargoHandling from './components/CargoHandling/CargoHandling.js';
import afterRouting from './components/CargoRouting/afterRouting.js'





class App extends Component {
  render() {
    return (
      <>
        <CargoHeader />
        <Content>
          <Switch >
            <Route exact path="/" component={LandingPage} />
            <Route path="/cargoitems" component={CargoPage} />
            <Route path="/cargobooking" component={CargoBooking} />
            <Route path="/cargorouting" component={CargoRouting} />
            <Route path="/routingLandingPage" component={routingLandingPage} />
            <Route path="/cargohandling" component={CargoHandling} />
            <Route path="/afterRouting" component={afterRouting} />
            
            
          </Switch>
        </Content>
       
      </>
    );
  }
}

export default App;

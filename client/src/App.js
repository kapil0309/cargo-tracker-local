import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import CargoHeader from './components/CargoHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import CargoPage from './content/CargoPage';

class App extends Component {
  render() {
    return (
      <>
        <CargoHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/cargoitems" component={CargoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;

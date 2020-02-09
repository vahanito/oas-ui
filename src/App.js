import React from 'react';
import OasService from './services/OasService';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ComponentContentFactory from './components/ComponentContentFactory';
import MenuFactory from './components/MenuFactory';
import Home from './pages/home/Home';
import ResourceContentFactory from './components/ResourceContentFactory';
import PropTypes from 'prop-types';

const App = ({oas}) => {
  OasService.setOas(oas);
  return (
    <>
      <Router>
        <Route path='/:category?/:item?' component={MenuFactory}/>
        <main>
          <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/resources/:resource?' component={ResourceContentFactory}/>
              <Route path='/components/:component?' component={ComponentContentFactory}/>
              <Redirect from="*" to='/'/>
            </Switch>
          </div>
        </main>
      </Router>
    </>
  );
};

App.propTypes = {
  oas: PropTypes.object
};

export default App;

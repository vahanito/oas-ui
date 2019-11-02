import React from 'react';
import OasService from './services/OasService';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ComponentContentFactory from './components/ComponentContentFactory';
import ResourceContentFactory from './components/ResourceContentFactory';
import MenuFactory from './components/MenuFactory';
import Home from './pages/home/Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      oas: props.initValue
    };
    OasService.setOas(props.initValue);
  }

  render() {
    return (
      <>
        <Router>
          <Route path="/oas-ui/:category?/:item?" component={MenuFactory}/>
          <main>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/oas-ui/" component={Home}/>
                <Route path="/oas-ui/resources/:resource?" component={ResourceContentFactory}/>
                <Route path="/oas-ui/components/:component?" component={ComponentContentFactory}/>
                <Redirect from="*" to="/oas-ui/"/>
              </Switch>
            </div>
          </main>
        </Router>
      </>
    );
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
    this.props.onUpdate(event.target.value);
  };
}

export default App;

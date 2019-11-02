import React from 'react';
import OasService from './services/OasService';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ComponentContentFactory from './components/ComponentContentFactory';
import ResourceContentFactory from './components/ResourceContentFactory';
import MenuFactory from './components/MenuFactory';
import Home from './pages/home/Home';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    if (props.specUrl) {
      axios.get(props.specUrl)
        .then((response) => {
            document.getElementById('log').innerText = response.status + ': ' + response.data;
            this.initialized(response.data);
            this.forceUpdate();
        });   
    } else {
      this.initialized(props.initValue);
    }
  }

  render() {
    return (
      <>
        <Router>
          <Route path="/:category?/:item?" component={MenuFactory}/>
          <main>
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/resources/:resource?" component={ResourceContentFactory}/>
                <Route path="/components/:component?" component={ComponentContentFactory}/>
                <Redirect from="*" to="/"/>
              </Switch>
            </div>
          </main>
        </Router>
      </>
    );
  }

  initialized = (data) => {
    this.state = {
      oas: data
    };
    OasService.setOas(data);
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
    this.props.onUpdate(event.target.value);
  };
}

export default App;

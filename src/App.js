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
      oas: props.initValue,
      urlPrefix: props.urlPrefix
    };
    OasService.setOas(props.initValue);
  }

  render() {
    return (
      <>
        <Router basename={this.state.urlPrefix}>
          <Route path={'/:category?/:item?'} component={MenuFactory}/>
          <main>
            <div className="container-fluid">
              <Switch>
                <Route exact component={Home}/>
                <Route path='/resources/:resource?' component={ResourceContentFactory}/>
                <Route path='/components/:component?' component={ComponentContentFactory}/>
                <Redirect from="*" to={'/'}/>
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

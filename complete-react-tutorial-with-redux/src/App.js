import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EvoDev from './EvoDev';

class App extends Component {
  state = {
    name: 'Valente',
    commoPros: {name: 'EvoDev - Evolutive Development!', version: 'v.1.0.2'}
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <EvoDev data_props={this.state.commoPros} />
        </header>
      </div>
    );
  }
}

export default App;

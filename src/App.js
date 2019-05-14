import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.js'
import Footer from './components/footer/index.js'
import 'materialize-css/dist/css/materialize.min.css';
import rocket from './images/rocket.jpg';


const pStyle = {
  width: '100%'
};


class App extends Component {
  
  render() {
    return (
      <div className="App">

        <Header />
        <img src={rocket} style={pStyle} className="App-logo" alt="logo" />
        <p>This is something about me</p>
        <Footer />
        {/** <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
    </header>*/}
      </div>
    );
  }
}

export default App;

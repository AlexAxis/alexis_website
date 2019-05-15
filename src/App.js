import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.js'
import Content from './components/content/index.js'
import Footer from './components/footer/index.js'
import 'materialize-css/dist/css/materialize.min.css';
import wallpaper from './images/wallpaper1.jpg';


const pStyle = {
  width: '100%',
  //position: 'absolute'
};


class App extends Component {

  render() {
    return (
      <div className="main-grid " style={pStyle}>
        <img src={wallpaper} style={pStyle} className="App-logo" alt="logo" />
        <Header className="header" />
        {/* <p>This is something about me</p> */}
        <Content className="content" />
        <Footer className="footer" />
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

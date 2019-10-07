import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.js'
import Content from './components/content/index.js'
import Footer from './components/footer/index.js'
import Projects from './components/projects/index.js'
import Skills from './components/skills/index.js'
import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Parallax } from "react-parallax";
import wallpaper from './images/wallpaper1.jpg';
import coffeecode from './images/coffeecode.jpg';
import porto from './images/porto.jpg';





// const pStyle = {
//   width: '100%',
//   opacity: 1
// };


class App extends Component {


  render() {

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.pushpin');
      var instances = M.Pushpin.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.scrollspy');
      var throttle = 50
      var instances = M.ScrollSpy.init(elems);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems);
    });

    return (

      <div>

        <Header className="header" />


        <Parallax bgImage={wallpaper} strength={400}>
          <div style={{ height: 520 }}>
            {/* <div className="main-grid" style={pStyle}> */}
            <div className="main-grid">
              <Content className="content" />
            </div>
          </div>
        </Parallax>


        <div id="projects" className="section white scrollspy">
          <div className="container">
            <h2 className="header">Projects</h2>
            <p className="grey-text text-darken-3 lighten-3">Some projects that I developed on my own to demonstrate my skills</p>
          </div>
          <Projects></Projects>
        </div>


        <Parallax bgImage={porto} strength={900}>
          <div style={{ height: 400 }}>
            <p class="homecity" >My home city</p>
          </div>
        </Parallax>


        <div id="skills" className="section white scrollspy">
          <div className="container">
            <h2 className="header">Technological Skills</h2>
            <p className="grey-text text-darken-3 lighten-3">Technologies which I have the most experience with</p>
            <Skills></Skills>
          </div>
        </div>


        <Parallax bgImage={coffeecode} strength={400}>
          <div style={{ height: 400 }}>
          </div>
        </Parallax>


        <Footer className="footer" />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.js'
import Content from './components/content/index.js'
import Footer from './components/footer/index.js'
import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Parallax } from "react-parallax";
import wallpaper from './images/wallpaper1.jpg';
import coffeecode from './images/coffeecode.jpg';
import todo_app from './images/todo_app.png';
import porto from './images/porto.jpg';






const pStyle = {
  // width: '100%',
  //opacity: 1
};


class App extends Component {


  render() {

    document.addEventListener('DOMContentLoaded', function() {
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
          <div style={{ height: 500 }}>
            <div className="main-grid" style={pStyle}>
              <Content className="content" />
            </div>
          </div>
        </Parallax>

        {/* 

        <div className="parallax-container">
          <div className="parallax">
            <div className="main-grid" style={pStyle}>
              <Content className="content" />
            </div>
            <img src={wallpaper} style={pStyle} alt="wall1">
            </img>
          </div>
        </div> */}








        <div id="projects" className="section white scrollspy">
          <div className="row container">
            <h2 className="header">Projects</h2>
            <p className="grey-text text-darken-3 lighten-3">Some projects that I developed on my own to demonstrate my skills</p>
          </div>




          <div class="row">
            <div class="col s12 m7" style={{ alignSelf: 'center' }}>
              <div class="card horizontal" style={{ width: '100%' }}>
                <div class="card-stacked column1">
                  <div class="card-image">
                    <img src={todo_app} style={{ width: 500 }}></img>
                    <span class="card-title black-text orange lighten-2">To-do List</span>
                  </div>

                  <div class="card-content">
                    <span class="card-title">Technologies Used</span>
                    <h5>Frontend</h5>
                    <p>ReactJs</p>
                    <p>Bootstrap</p>
                    <p>Webpack</p>

                    <h5>Backend</h5>
                    <p>NodeJs</p>
                    <p>Express</p>
                    <p>MongoDB</p>

                    <h5>-----------------------------------</h5>

                  </div>
                  <div class="card-stacked column2">

                    <h5>Overview</h5>
                    <p>Simple app that keeps track of the list of tasks.</p>

                    <h5>Difficulties</h5>
                    <p>The "delete" button in each row was deleting the last element of the list instead of the one selected.
                        Make that the "delete all" button only deletes the ones that are checked in the pagination only.
                    </p>

                    <h5>Future improvements</h5>
                    <p>Each time the lists is updated (either a new row is created/edited/deleted) it is sent to the server the appropriate request (post/put/deleted) and then it is fetched all the list from the server.
                      The improvement is making this changes in the state, and save every change so that when the component is unmounted, then sends all the changes to the DB in one request.</p>

                    <h5>Notable features</h5>
                    <p>The filters and sortings are working together.
                      It is shown both the time of creation and the last edition of the task (in this last case, only if exists).
                      The "delete all" button only delete the tasks that are checked on the current pagination.</p>

                  </div>
                  <div class="card-action">
                    <a href="https://alexis-sousa.ml" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x"></i> Live demo</a>
                    <a href="https://github.com/AlexAxis/todo-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-code-fork fa-2x"></i> View code</a>

                  </div>
                </div>
              </div>
            </div>
          </div>



          <div class="row">
            <div class="col s12 m7">
              <div class="card" style={{ width: 500 }}>
                <div class="card-image">
                  <img src={todo_app} style={{ width: 500 }}></img>
                  <span class="card-title black-text orange lighten-2">To-do list</span>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="https://alexis-sousa.ml" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x"></i> Live demo</a>
                  <a href="https://github.com/AlexAxis/todo-app" target="_blank" rel="noopener noreferrer"><i className="fa fa-code-fork fa-2x"></i> View code</a>

                </div>
              </div>
            </div>
          </div>



        </div>
        {/* <div className="parallax-container">
          <div className="parallax">
            <img src={head} style={pStyle} alt="wall1">
            </img>
          </div>
        </div> */}

        <Parallax bgImage={porto} strength={900}>
          <div style={{ height: 400 }}>
            <p>My city</p>
          </div>
        </Parallax>


        <div id="about" className="section white scrollspy" style={{ height: 400 }}>
          <div className="row container">
            <h2 className="header">Technological Skills</h2>
            <p className="grey-text text-darken-3 lighten-3">Technologies which I have the most experience with.</p>
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

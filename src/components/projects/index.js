import React from 'react';
import './styles.scss';
import todoapp from '../../images/todoapp.png';
import moviesapi from '../../images/moviesapi.png';
import my_website from '../../images/my_website.png';



const Projects = (props) => {
    return (
        


        <div class="row">


        {/* <div class="col s12 m7" style={{ alignSelf: 'center' }}> */}
        <div class="card brown lighten-5">
          <div class="card-stacked column1">
            <div class="card-image">
              <img src={todoapp} style={{ width: '100%' }}></img>
              <span class="card-title black-text orange lighten-2">To-do App</span>
            </div>

            <div class="card-content">
              <div class="white">
                <span class="card-title">Technologies Used</span>
                <div class="row_white">
                  <div>
                    <h5>Frontend</h5>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                    <li>Webpack</li>
                  </div>
                  <div>
                    <h5>Backend</h5>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </div>
                </div>
              </div>

              <div class="card-stacked column2">

                <h5>Overview</h5>
                <p>Simple app that keeps track of the list of tasks.</p>

                <h5>Difficulties</h5>
                <p>The "delete" button in each row was deleting the last element of the list instead of the one selected.
                    Make that the "Delete Concluded Tasks" button only deletes the ones that are checked in the pagination only.
                  </p>

                <h5>Future improvements</h5>
                <p>Each time the lists is updated (either a new row is created/edited/deleted) it is sent to the server the appropriate request (post/put/deleted) and then it is fetched all the list from the server.
                    The improvement is making this changes in the state, and save every change so that when the component is unmounted, then sends all the changes to the DB in one request.</p>

                <h5>Notable features</h5>
                <p>The filters and sortings are working together.
                  It is shown both the time of creation and the last edition of the task (in this last case, only if exists).
                    The "Delete Concluded Tasks" button only delete the tasks that are checked on the current pagination.</p>

              </div>

            </div>

            <div class="card-action">
              <a href="https://todoapp.alexis-sousa.ml" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x"></i> Live demo</a>
              <a href="https://github.com/AlexAxis/TodoApp" target="_blank" rel="noopener noreferrer"><i className="fa fa-code-fork fa-2x"></i> View code</a>

            </div>
          </div>
        </div>
        {/* </div> */}





        <div class="card brown lighten-5">
          <div class="card-stacked column1">
            <div class="card-image">
              <img src={moviesapi} style={{ width: '100%' }}></img>
              <span class="card-title black-text orange lighten-2">Movies API</span>
            </div>

            <div class="card-content">
              <div class="white">
                <span class="card-title">Technologies Used</span>
                <div class="row_white">
                  <div>
                    <h5>Frontend</h5>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>External API requests</li>
                  </div>
                  <div>
                    <h5>Backend</h5>
                  </div>
                </div>
              </div>

              <div class="card-stacked column2">

                <h5>Overview</h5>
                <p>Application that searches movies, from inputted text, using an external API.</p>

                <h5>Difficulties</h5>
                <p>Put a sample of a video and not auto-playing it when the page is open, and pauses it when you leave the movie screen.
                  </p>

                <h5>Future improvements</h5>
                <p>Show the corresponding movie trailer to each movie appeared in the page. Get rid of the global variables (I know... who does this? This was one of my first programs, and I just haven't changed yet). 
                </p>

                <h5>Notable features</h5>
                <p>The pagination does itself when we scroll down with the mouse till the end of the page.</p>

              </div>

            </div>

            <div class="card-action">
              <a href="https://moviesapi.alexis-sousa.ml" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x"></i> Live demo</a>
              <a href="https://github.com/AlexAxis/movies-api" target="_blank" rel="noopener noreferrer"><i className="fa fa-code-fork fa-2x"></i> View code</a>

            </div>
          </div>
        </div>





        <div class="card brown lighten-5">
          <div class="card-stacked column1">
            <div class="card-image">
              <img src={my_website} style={{ width: '100%' }}></img>
              <span class="card-title black-text orange lighten-2">Wy website</span>
            </div>

            <div class="card-content">
              <div class="white">
                <span class="card-title">Technologies Used</span>
                <div class="row_white">
                  <div>
                    <h5>Frontend</h5>
                    <li>React</li>
                    <li>Html</li>
                    <li>Sass</li>
                    <li>Materialize</li>
                    <li>Webpack</li>
                  </div>
                  <div>
                    <h5>Backend</h5>
                  </div>
                </div>
              </div>

              <div class="card-stacked column2">

                <h5>Overview</h5>
                <p>My own website portfolio.</p>

                <h5>Difficulties</h5>
                <p>There wasn't much, but if I would have to describe which was the hardest of all the components, it would be the responsiveness.
                  </p>

                <h5>Future improvements</h5>
                <p>Create an option to insert the email and content, and send it through my website.</p>

                <h5>Notable features</h5>
                <p>Responsiveness. Parallax effects on the images. The buttons on top of the page have a "hover" effect. Top menu with "scrollspy" (the use of an external library -> Materialize).</p>

              </div>

            </div>

            <div class="card-action">
              <a href="https://alexis-sousa.ml" target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x"></i> Live demo</a>
              <a href="https://github.com/AlexAxis/alexis_website" target="_blank" rel="noopener noreferrer"><i className="fa fa-code-fork fa-2x"></i> View code</a>

            </div>
          </div>
        </div>




      </div>



 

    )
};

export default Projects;
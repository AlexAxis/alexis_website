import React from 'react';
import './styles.scss';
import resume from '../../files/Alexis_Resume.pdf'


const Footer = (props) => {
  return (
    <footer id="contact" class="page-footer" className="scrollspy" >
      <div class="container">
        <div class="row">

          <div class="col l6 s12">
            <h5 class="white-text">About me</h5>
            <p class="grey-text text-lighten-4">I am passionate for technologies and programming.</p>
            <p class="grey-text text-lighten-4">If you like what you see don't hesitate to contact me.</p>
          </div>

          <div class="col l4 offset-l2 s12">
            <div class="centerdiv">
              <ul>
                <h5 class="white-text">Links</h5>
                <li>
                  <a class="orange-text text-lighten-3" href={resume} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-download"></i> Resume
                </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="https://github.com/AlexAxis" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> Github
                </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/alexis-sousa" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square"></i> Linked in
                </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="mailto:alexis-sousa@hotmail.com?Subject=I%20just%20saw%20your%20portfolio%20and..." target="_top">
                    <i className="fa fa-envelope-o"></i> Email
                </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="footer-copyright" style={{ backgroundColor: 'darkred' }}>
        <div class="container white-text center">
          © 2019 Alexis Sousa
        </div>
      </div>
    </footer>


  )
};

export default Footer;
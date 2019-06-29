import React from 'react';
import './styles.scss';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'


const Footer = (props) => {
  return (
    <footer id="contact" class="page-footer" className="scrollspy" >
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>



            <div className="content-grid">
                <div className="middle-grid-flexbox">
                    <a href="https://github.com/AlexAxis" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <i className="icon fa fa-github fa-3x" style={{ color: 'purple' }}></i>
                            {/* <img className="icon" src={github} alt="github" /> */}
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/alexis-sousa/" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <i className="icon fa fa-linkedin-square fa-3x" style={{ color: '#0077b5' }}></i>
                            {/* <img className="icon" src={linkedin} alt="linkedin" /> */}
                        </span>
                    </a>

                    <a href="mailto:alexis-sousa@hotmail.com?Subject=I%20just%20saw%20your%20portfolio%20and..." target="_top">
                        <span className="circle">
                            <i className="icon fa fa-envelope-o fa-3x" style={{ color: 'darkgreen' }}></i>
                            {/* <img className="icon" src={email} alt="email" /> */}
                        </span>
                    </a>
                </div>
            </div>




          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>


  )
};

export default Footer;
import React from 'react';
import './styles.scss';
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import resume from '../../files/resume.pdf'


const Content = (props) => {

    return (

        <div>

            <h1 class="white-text">Software Engineer</h1>
            <p class="white-text">&amp;</p>
            <h1 class="white-text">Fullstack Developer</h1>


            <a className="button-hover" style={{ marginBottom: '30px'}} class="waves-effect waves-light btn black-text orange lighten-2" href={resume} target="_blank" rel="noopener noreferrer">
                View Resume
            </a>

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
    )
};

export default Content;
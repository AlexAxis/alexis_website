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
            <h1 class="white-text">Fullstack Develeoper</h1>


            <a class="waves-effect waves-light btn" href={resume} target="_blank" rel="noopener noreferrer">
                View Resume
            </a>

            <div className="content-grid">
                <div className="middle-grid-flexbox">
                    <a href="https://github.com/AlexAxis" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <img className="icon" src={github} alt="github" />
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/alexis-sousa/" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <img className="icon" src={linkedin} alt="linkedin" />
                        </span>
                    </a>

                    <a href="mailto:alexis-sousa@hotmail.com?Subject=I%20just%20saw%20your%20portfolio%20and..." target="_top">
                        <span className="circle">
                            <img className="icon" src={email} alt="email" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Content;
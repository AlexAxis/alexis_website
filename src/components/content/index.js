import React from 'react';
import './styles.scss';
import resume from '../../files/Alexis_Resume.pdf'


const Content = (props) => {

    return (

        <div>

            <h1 class="white-text title" style={{ marginTop: '75px'}}>Software Engineer</h1>
            <h5 class="white-text">&amp;</h5>
            <h1 class="white-text title">Fullstack Developer</h1>


            <a className="button-hover" style={{ marginBottom: '30px'}} class="waves-effect waves-light btn black-text orange lighten-2" href={resume} target="_blank" rel="noopener noreferrer">
            <i className="icon fa fa-download fa-3x"></i>
                View Resume
            </a>

            <div className="content-grid">
                <div className="middle-grid-flexbox">
                    <a href="https://github.com/AlexAxis" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <i className="icon fa fa-github fa-3x" style={{ color: 'purple' }}></i>
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/alexis-sousa" target="_blank" rel="noopener noreferrer">
                        <span className="circle">
                            <i className="icon fa fa-linkedin-square fa-3x" style={{ color: '#0077b5' }}></i>
                        </span>
                    </a>

                    <a href="mailto:alexis-sousa@hotmail.com?Subject=I%20just%20saw%20your%20portfolio%20and..." target="_top">
                        <span className="circle">
                            <i className="icon fa fa-envelope-o fa-3x" style={{ color: 'darkgreen' }}></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Content;
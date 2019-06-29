import React from 'react';
import './styles.scss';
//import Logo from './../../assets/graphics/logo.png';
import { BrowserRouter, Switch, Link } from 'react-router-dom'



const Header = (props) => {
    return (

        <BrowserRouter>

            {/**   <header data-test="headerComponent">
                <div className="wrap">*/}

{/* data-target="mobile-menu" com o M */}

            <nav className="pushpin">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Alexis Sousa</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        {/* <li><Link to="Projects.html" >Projects</Link></li>
                        <li><Link to="About.html">About</Link></li>
                        <li><Link to="Contact.html">Contact</Link></li> */}
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#contact" >Contact</a></li>

                       
                    </ul>

                </div>
            </nav>



            { /**          </div>
            </header>*/}



            {/* <div className="App">
                <Menu />
                <Switch>
                    <Route exact path='/' component={Todo} />
                    <Route path='/todos' component={Todo} />
                    <Route path='/about' component={About} />
                </Switch>
            </div> */}


        </BrowserRouter>



    )
};

export default Header;
import React from 'react';
import './styles.scss';
//import Logo from './../../assets/graphics/logo.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'


const Header = (props) => {
    return (

        <BrowserRouter>

          {/**   <header data-test="headerComponent">
                <div className="wrap">*/}



                    <nav>
                        <div class="nav-wrapper">
                            <a href="#" class="brand-logo">Alexis Sousa</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><Link to="sass.html" >Sass</Link></li>
                                <li><Link to="badges.html">Components</Link></li>
                                <li><Link to="collapsible.html">JavaScript</Link></li>
                            </ul>
                            
                        </div>
                    </nav>



      { /**          </div>
            </header>*/}



            <div className="App">
               {/**  <Menu />*/}
                <Switch>
{/**                     <Route exact path='/' component={Todo} />
                    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />*/}
                </Switch>
            </div>
        </BrowserRouter>



    )
};

export default Header;
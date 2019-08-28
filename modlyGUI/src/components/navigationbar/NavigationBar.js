import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import SubHeader from './subheader/SubHeader.js'
import Home from '../../pages/home/Home'

export default function NavigationBar() {
    return (
        <Router>
            <div className="navigationBarWrapper">
                <ul className="navigationList">
                    <span className="logotype">MODLY</span>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/home">      Home         </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/about">     About        </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/expertise"> Animations   </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/portfolio"> Support      </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/contact">   Contact      </NavLink> </li>
                    <li className="shoppingCartIcon"> <i class="fa fa-shopping-cart" aria-hidden="true"> </i></li>
                    <li className="myLikesIcon"> <i class="fa fa-heart" aria-hidden="true"> </i></li>
                </ul>
                <SubHeader/>
                <Switch>
                    <Route exact path="/home"       component={Home} />
                    <Route exact path="/about"      component={Home} />
                    <Route exact path="/expertise"  component={Home} />
                    <Route exact path="/portfolio"  component={Home} />
                    <Route exact path="/contact"    component={Home} />
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

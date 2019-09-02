import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import SubHeader from './subheader/SubHeader.js'
import Home from '../../pages/home/Home'
import Design from '../../pages/shop/Shop'

export default function NavigationBar() {
    return (
        <Router>
            <div className="navigationBarWrapper">
                <ul className="navigationList">
                    <span className="logotype">M O D L Y .</span>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/home">      Hem         </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/about">     Design        </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/expertise"> Animation   </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/portfolio"> Inspiration      </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/contact">   Kontakt      </NavLink> </li>
                    <li className="shoppingCartIcon"> <i className="fa fa-shopping-cart" aria-hidden="true"> </i></li>
                    <li className="myLikesIcon"> <i className="fa fa-user" aria-hidden="true"> </i></li>
                </ul>
                <SubHeader/>
                <Switch>
                    <Route exact path="/home"       component={Home} />
                    <Route exact path="/about"      component={Design} />
                    <Route exact path="/expertise"  component={Home} />
                    <Route exact path="/portfolio"  component={Home} />
                    <Route exact path="/contact"    component={Home} />
                    <Route component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

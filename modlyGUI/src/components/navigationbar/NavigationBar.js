import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import SubHeader from './subheader/SubHeader.js'

export default function NavigationBar() {
    return (
        <Router>
        <div className="navigationBarWrapper">
            <ul className="navigationList">
                <span className="logotype">MODLY</span>
                <li className="itemList"> <NavLink activeClassName='is-active' to="/home">      Home        </NavLink> </li>
                <li className="itemList"> <NavLink activeClassName='is-active' to="/about">     About       </NavLink> </li>
                <li className="itemList"> <NavLink activeClassName='is-active' to="/expertise"> Animations   </NavLink> </li>
                <li className="itemList"> <NavLink activeClassName='is-active' to="/portfolio"> Support   </NavLink> </li>
                <li className="itemList"> <NavLink activeClassName='is-active' to="/contact">   Contact     </NavLink> </li>
                <span className="shoppingCartIcon">SHOPPINGCART</span>
            </ul>
                <SubHeader/>
   {/*              <Switch>
                        <Route exact path="/home"        />
                        <Route exact path="/about"       />
                        <Route exact path="/expertise"   />
                        <Route exact path="/portfolio"   />
                        <Route exact path="/contact"     />
                        <Route  />
                    </Switch> */}
        </div>
    </Router>
    )
}

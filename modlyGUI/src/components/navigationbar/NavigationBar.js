import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'

export default function NavigationBar() {
    return (
        <Router>
        <div className="navigationBarWrapper">
            <ul className="navigationList">
                <span className="logotype">MODLY</span>
                <li className="home">      <NavLink activeClassName='is-active' to="/home">      Home        </NavLink> </li>
                <li className="about">     <NavLink activeClassName='is-active' to="/about">     About       </NavLink> </li>
                <li className="expertise"> <NavLink activeClassName='is-active' to="/expertise"> Expertise   </NavLink> </li>
                <li className="portfolio"> <NavLink activeClassName='is-active' to="/portfolio"> Portfolio   </NavLink> </li>
                <li className="contact">   <NavLink activeClassName='is-active' to="/contact">   Contact     </NavLink> </li>
                <span className="shoppingCartIcon">SHOPPINGCART</span>
            </ul>
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

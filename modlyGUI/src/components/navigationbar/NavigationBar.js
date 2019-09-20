import React, {Suspense, lazy} from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import Spinner from '../../shared/images/spinner.gif'
import SubHeader from './subheader/SubHeader.js'
const Home = lazy(() => import('../../pages/home/Home'));
const Container = lazy(() => import('../../animations/Container'));

export default function NavigationBar() {
    return (
        <Router>            
            <div className="navigationBarWrapper">
                <ul className="navigationList">
                    <span className="logotype">NyttNamn</span>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/home">          Hem          </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/tables">        Bord         </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/inspiration">   Inspiration  </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/kontakt">       Kontakt      </NavLink> </li>
                    <li className="shoppingCartIcon"> <i className="fa fa-shopping-cart" aria-hidden="true"> </i></li>
                    <li className="myLikesIcon">      <i className="fa fa-user"          aria-hidden="true"> </i></li>
                </ul>
                <SubHeader/>

                <Suspense fallback={<img src={Spinner} alt="SpinnerLogo"/>}>
                    <Switch>
                        <Route exact path="/home"       component={Home} />
                        <Route exact path="/tables"     component={Container} />
                        <Route exact path="/inspiration"  component={Home} />
                        <Route exact path="/kontakt"    component={Home} />
                        <Route component={Home} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

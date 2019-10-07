import React, {Suspense, lazy} from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import Spinner from '../../shared/images/spinner.gif'
import Cart from '../cart/Cart'
import User from '../user/User'
const Home = lazy(() => import('../../pages/home/Home'));
const Container = lazy(() => import('../../animations/Container'));
const Tables = lazy(() => import('../../pages/tables/Tables'));
const Contact = lazy(() => import('../../pages/contact/Contact'));
const Checkout = lazy(() => import('../../pages/checkout/Checkout'));

export default function NavigationBar() {
    return (
        <Router>   
            <div className="navigationBarWrapper">
            
                <ul className="navigationList">
                    <span className="logotype">MODON</span>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/home">          Hem          </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/tables">        Bord         </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/inspiration">   Inspiration  </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/kontakt">       Kontakt      </NavLink> </li>
                    <User/>
                    <Cart/>
                </ul>

                <Suspense fallback={<img className="spinnerImage" src={Spinner} alt="SpinnerLogo"/>}>
                    <Switch>
                        <Route exact path="/home"         component={Home} />
                        <Route exact path="/tables"       component={Tables} />
                        <Route exact path="/inspiration"  component={Container} />
                        <Route exact path="/kontakt"      component={Contact} />
                        <Route exact path="/checkout"     component={Checkout} />
                        <Route component={Home} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

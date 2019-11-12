import React, {Suspense, lazy} from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom'
import './NavigationBar.css'
import Spinner from '../../shared/images/spinner.gif'
import Cart from '../cart/Cart'
import ToggleCartButton from '../toggleCartButton/ToggleCartButton'
import User from '../user/User'
import LanguagePicker from '../languageHandler/LanguageHandler'
import Footer from '../../components/footer/Footer'
import SubFooter from '../../components/subheader/SubHeader'
const Home = lazy(() => import('../../pages/home/Home'));
const AnimationContainer = lazy(() => import('../../animations/AnimationContainer'));
const Tables = lazy(() => import('../../pages/tables/Tables'));
const Contact = lazy(() => import('../../pages/contact/Contact'));
const Checkout = lazy(() => import('../../pages/checkout/Checkout'));
const EmailVerification = lazy(() => import('../../pages/authentication/emailverification/EmailVerification'));
const Admin = lazy(() => import('../../pages/admin/Admin'));
const Authentication = lazy(() => import('../../pages/authentication/Authentication'));

export default function NavigationBar() {
    return (
        <Router>   
            <div className="navigationBarWrapper">
            
                <ul className="navigationList">
                    <li className="itemList logotype">Furnique</li>
                    <div className="navigationLinks">
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/">           Home          </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/tables">         Shop          </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/inspiration">    Design        </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/tableees">       Inspiration   </NavLink> </li>
                    <li className="itemList"> <NavLink activeClassName='is-active' to="/tabeeles">       Mission       </NavLink> </li>
                    </div>
                    <li className="itemList toggleShopCart"> <ToggleCartButton/> </li>
                    <li className="itemList toggleUser"> <User/> </li>
                    <li className="itemList toggleFlag"> <LanguagePicker/> </li>
                    <li><Cart/></li>
                </ul>
                

                <Suspense fallback={<img className="spinnerImage" src={Spinner} alt="SpinnerLogo"/>}>
                    <Switch>
                        <Route exact path="/"                 component={Home} />
                        <Route exact path="/tables"               component={Tables} />
                        <Route exact path="/inspiration"          component={AnimationContainer} />
                        <Route exact path="/kontakt"              component={Contact} />
                        <Route exact path="/checkout"             component={Checkout} />
                        <Route exact path="/authentication"       component={Authentication} />
                        <Route exact path="/admin"                component={Admin} />
                        <Route exact path="/emailverification"    component={EmailVerification} />
                        <Route component={Home} />
                    </Switch>
                </Suspense>
            </div>
            <SubFooter/>
            <Footer/>
        </Router>
    )
}

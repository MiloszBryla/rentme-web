import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage"
import About from '../About/About';
import ItemContent from "../EditItem/ItemContent";
import RecoverAcc from '../RecoverAcc/RecoverAcc';
import LandingPage from '../LandingPage/LandingPage';
import AddItemContent from "../AddItem/AddItemContent";
import ErrorPage from '../ErrorPage/ErrorPage';
import ItemsList from '../ItemsList/ItemsList';
import ItemView from "../ItemView/ItemView";
import PaymentCont from "../Payment/PaymentsCont";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../SignUp/SignUp";
import PasswordRecoveryPage from "../PasswordRecoveryPage/PasswordRecoveryPage";
import {ProtectedRoute} from "../RouteProtection/ProtectedRoute";

function App() {
   return (
     <Router>
       <div className="App">
         <Switch>
           <ProtectedRoute path="/pay/item/:id" component={PaymentCont}/>
           <Route path="/about" component={About}/>
           <Route path="/login" component={LoginPage}/>
           <Route path="/recovery" component={PasswordRecoveryPage}/>
           <Route path="/" exact component={LandingPage}/>
           <Route path="/index" component={LandingPage}/>
           <Route path="/account/recover" component={RecoverAcc}/>
           <ProtectedRoute path="/item/:id" exact component={ItemContent}/>
           <ProtectedRoute path="/item" exact component={AddItemContent}/>
           <Route path="/item/view/:id" exact component={ItemView}/>
           <Route path="/items-list/:searchPhrase" component={ItemsList}/>
           <ProtectedRoute path="/dashboard/:id" component={Dashboard}/>
           <Route path="/signup" component={SignUp}/>
           <Route path="*" component={ErrorPage} />
         </Switch>
       </div>
     </Router>
   );
}

export default App;

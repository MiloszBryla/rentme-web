import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import About from '../About/About';
import ItemContent from "../EditItem/ItemContent";
import Login from '../Login/Login';
import RecoverAcc from '../RecoverAcc/RecoverAcc';
import LandingPage from '../LandingPage/LandingPage';
import AddItemContent from "../AddItem/AddItemContent";
import ErrorPage from '../ErrorPage/ErrorPage';
import ItemsList from '../ItemsList/ItemsList';

import ItemView from "../ItemView/ItemView";
import PaymentCont from "../Payment/PaymentsCont";




function App() {
   return (
     <Router>
       <div className="App">
         <Switch>
           <Route path="/pay/item/:id" component={PaymentCont}/>
           <Route path="/about" component={About}/>
           <Route path="/" exact component={LandingPage}/>
           <Route path="/index" component={LandingPage}/>
           <Route path="/account/recover" component={RecoverAcc}/>
           <Route path="/item/:id" exact component={ItemContent}/>
           <Route path="/item" exact component={AddItemContent}/>
           <Route path="/item/view/:id" exact component={ItemView}/>
           <Route path="/login" component={Login}/>
           <Route path="/items-list/:searchPhrase" component={ItemsList}/>
           <Route path="*" component={ErrorPage} />
         </Switch>
       </div>
     </Router>
   );
}

export default App;
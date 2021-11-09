import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import Error from './Pages/Shared/Error/Error';
// import { Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/allProducts">
          <AllProducts></AllProducts>
        </Route>
        <Route path="/contactUs">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

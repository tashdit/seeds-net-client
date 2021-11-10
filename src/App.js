import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/Home/AboutUs/AboutUs';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import Error from './Pages/Shared/Error/Error';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ExplorProducts from './Pages/Home/ExplorProducts/ExplorProducts';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <AboutUs></AboutUs>
          </PrivateRoute>
          <Route path="/allProducts">
            <ExplorProducts></ExplorProducts>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import "./Admin.css"
import Navigation from '../Shared/Navigation/Navigation';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddAProduct from './AddAProduct/AddAProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import DashLogOut from '../DashBoard/DashLogOut/DashLogOut';
import ManageProducts from './ManageProducts/ManageProducts';
const Admin = () => {

    let { path, url } = useRouteMatch();

    const { logOut } = useAuth()
    return (
        <>
            <Navigation></Navigation>
            <div className="dashboard-container container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            <Link to={`${url}/AllOrders`}>
                                <li className="dashboard-menu mt-5">Manage All Orders</li>
                            </Link>

                            <Link to={`${url}/AddProduct`}>
                                <li className="dashboard-menu mt-5">Add A Product</li>
                            </Link>

                            <Link to={`${url}/MakeAdmin`}>
                                <li className="dashboard-menu mt-5">Make Admin</li>
                            </Link>
                            <Link to={`${url}/ManageProducts`}>
                                <li className="dashboard-menu mt-5">Manage Products</li>
                            </Link>
                            <Link to={`${url}/logOut`}>
                                <li className="dashboard-menu mt-5">Log Out</li>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={`${path}/AllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route exact path={`${path}/AddProduct`}>
                                <AddAProduct></AddAProduct>
                            </Route>
                            <Route exact path={`${path}/MakeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/ManageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/logOut`}>
                                <DashLogOut></DashLogOut>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Admin;
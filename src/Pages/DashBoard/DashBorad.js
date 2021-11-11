import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import Pay from './Pay/Pay';
import DashLogOut from './DashLogOut/DashLogOut';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';


const DashBorad = () => {

    let { path, url } = useRouteMatch();

    const { logOut } = useAuth()
    return (
        <div>
            <Navigation></Navigation>
            <div className="dashboard-container container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link>

                            <Link to={`${url}/Pay`}>
                                <li className="dashboard-menu mt-5">Pay</li>
                            </Link>
                            <Link to={`${url}/logOut`}>
                                <li className="dashboard-menu mt-5">Log Out</li>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/Pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/logOut`}>
                                <DashLogOut></DashLogOut>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBorad;
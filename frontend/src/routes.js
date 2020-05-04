import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth';

//import pages
const Login = lazy((dataUser) => import('./pages/login'));

const Dashboard = lazy((dataUser) => import('./pages/dashboard'));
const CellCreate = lazy(() => import('./pages/cells/create'));
const MemberCreate = lazy(() => import('./pages/members/create'));
const Page404 = lazy(() => import('./pages/404'));

// 
const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render= { props => 
                isAuthenticated() ? (
                    <Component {... props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )

            }
        />
    )
}

function  Routes(){
    return (        
        <div className="wrapper">
            <BrowserRouter>
                <Suspense fallback={
                    <div className="loader">
                        <span></span>
                        <span></span>
				    </div>
                    }>
                    <Switch>
                        <PrivateRouter exact path="/" component={Dashboard}/>
                        <PrivateRouter path="/cell/create" component={CellCreate}/>
                        <PrivateRouter path="/members/create" role='Leader' component={MemberCreate}/>

                        <Route path='/login' component={ Login } />

                        <Route path='*' component={Page404} />

                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
        )
}

export default Routes
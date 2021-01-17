import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../styles/main.scss";
import Navbar from '../components/layout/Navbar';
import Landing from '../components/layout/Landing';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login'
import Alert from '../components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from '../actions/auth';

if(localStorage.token){
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return(
        <Provider store={store}>
        <Router>
            <div className="app">
                <Navbar/>
                <Route exact path="/" component={Landing}/>
                <section className="container">
                    <Alert/>
                    <Switch>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                    </Switch>
                </section>
            </div>
        </Router>
        </Provider>
    )
}
/*function App(){
    return(
        <div>
            <p>App</p>
        </div>
    )
}*/

export default App
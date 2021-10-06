import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../Pages/Login/';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    );
}

export default Routes;
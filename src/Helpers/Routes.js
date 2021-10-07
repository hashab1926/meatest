import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../Pages/Login';
import Courses from '../Pages/Courses';
import DetailCourses from '../Pages/Courses/CourseDetail';
import Header from '../Template/Header';

const ProtectedRoutes = (props) => {
    document.body.className = "bg-grey";
    const { component, path } = props;
    return (
        <>
            <Header />
            <Route path={path} component={component} {...props} />
        </>
    );

}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <ProtectedRoutes path='/course' component={Courses} />
                <ProtectedRoutes path='/detail-course' component={DetailCourses} />

            </Switch>
        </Router>
    );
}

export default Routes;
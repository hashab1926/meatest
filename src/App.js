import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './MarginPadding.css';

import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login';
import DetailCourse from './Pages/Courses/Detail/DetailCourse';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/courses" component={Courses} />
        <Route path="/detail_course" component={DetailCourse} />
      </Switch>

    </Router>
  );
}

export default App;

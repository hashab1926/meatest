import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './MarginPadding.css';

import LoginPage from './Pages/LoginPage';
import CoursesPage from './Pages/CoursesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/courses" component={CoursesPage} />
      </Switch>

    </Router>
  );
}

export default App;

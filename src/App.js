import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import UserLogin from './components/routes/UserLogin';
import './components/css/Header_Footer.css'
import {Route, Switch} from 'react-router-dom'
import Error from './components/Error';
import HomePage from './components/routes/HomePage';


function App() {

  return (
        <Switch>
          <Route path = '/' component = {HomePage} exact/>
          <Route path = '/login' component = {UserLogin} exact/>
          <Route path = '/appointment' component = {AppointmentForm} exact/>
          <Route component={Error} />
        </Switch>
  );
}

export default App;

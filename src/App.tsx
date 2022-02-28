import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';


const app: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}
export default app

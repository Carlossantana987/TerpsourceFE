import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import RequestA from './components/requesterForm/RequestPageA';
import RequestB from './components/requesterForm/RequestPageB';
import RequestC from './components/requesterForm/RequestPageC';
import Login from './components/adminPanel/Login'
import NoMatch from './components/noMatch/NoMatch.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt ,faHome, faEyeSlash} from '@fortawesome/free-solid-svg-icons';



library.add(faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt, faHome,faEyeSlash);


function App() {
  return (
    <div className="App">
      <Router>
        <div className='bg' />
        <div className='bg bg2' />
        <div className='bg bg3' />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/requestA' component={RequestA} />
          <Route path='/requestB' component={RequestB} />
          <Route path='/requestC' component={RequestC} />
          <Route path='/adminPanel' component={Login}/>
          <Route component={NoMatch}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

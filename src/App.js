import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Request from './components/requesterForm/RequestPage'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



library.add(faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt)


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/request' component={Request}/>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;

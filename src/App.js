import './App.scss';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import RequestA from './components/requesterForm/RequestPageA';
import RequestB from './components/requesterForm/RequestPageB';
import RequestC from './components/requesterForm/RequestPageC';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



library.add(faMapMarkedAlt, faHeadset, faUsers, faDeaf, faPhoneAlt)


function App() {
  return (
    <div className="App">
      <div className='bg' />
      <div className='bg bg2' />
      <div className='bg bg3' />
      <Switch>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/requestA' component={RequestA} />
        <Route path='/requestB' component={RequestB} />
        <Route path='/requestC' component={RequestC} />
        <Footer />
      </Switch>
    </div>
  );
}

export default App;

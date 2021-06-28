import React from 'react';
import HomeBanner from './homeComponents/HomeBanner';
import HomePageDetail from './homeComponents/HomePageDetail'
import AboutDetails from './homeComponents/AboutDetails';


export default class Home extends React.Component {
    render(){
    return (
        <div>
         <HomeBanner/>
         <AboutDetails />
         <HomePageDetail/>
       </div>
    )
  }
}
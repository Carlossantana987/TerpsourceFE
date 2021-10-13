import React from 'react'
import '../homeStyles/homebanner.scss'

export default class HomeBanner extends React.Component{
    render(){
        return(
            <div className="bannerContainer">
            <div className="homebanner">
            <div className="homeContext">
                <h1>LANGUAGE</h1>
                <h2>INTERPRETING SERVICES</h2>
                <h4>Empowering People & Communities to thrive</h4>
                </div>
            </div>
            <span></span>
            <div className="homeBannerContent">
            </div>
            </div>
        )
    }
}
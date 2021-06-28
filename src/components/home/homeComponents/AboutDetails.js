import React from 'react'
import '../homeStyles/aboutDetail.scss'
import detailImg from '../../../assets/TerpSourceHomeImage.png';
// import worldImg from './image/worldImg.png';


export default class AboutDetails extends React.Component {
    render() {
        return (
            <div>
                <div className="aboutUsTopSection">
                    <div className="topSectionText">
                        <h1>We Are Interpreting Experts.</h1>
                        <h2>Over 20 years of experience, 24 hours a day, 7 days a week.</h2>
                    </div>
                </div>
                <div className="aboutUsSection">
                    <span></span>
                    <div className="aboutUsDetail">
                        <h2>Who is Interpreter Source</h2>
                        <p>With more than 20 years of experience, Interpreter Source LLC is the language service provider of choice for clients all across Florida. We provide the most qualified and dependable access to highly trained professional linguists 24 hours a day, 7 days a week for onsite and phone interpreting to local government entities, educational institutions, medical facilities, law firms, non-profit organizations and much more.</p>
                    </div>

                    <img className="detailImg" src={detailImg} alt="Interpetor Source" />
                </div>
            </div>
        )
    }
}
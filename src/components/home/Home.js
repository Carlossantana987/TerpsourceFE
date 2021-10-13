import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './homeStyles/home.scss';
import terpLogo from './image/logoTerp.png';
import detailImg from './image/TerpSourceHomeImage.png';
import mainImg from './image/mainImg.jpg'


export default class Home extends React.Component {
  render() {
    return (
      <div className="backgroundHome">

        <div className="banner1">
        <img src={mainImg}/>
        <div className="banner1Wrapper">
          <h1>LANGUAGE</h1>
          <h2>INTERPRETING SERVICES</h2>
          <h4>Empowering People & Communities to thrive</h4>
          </div>
        </div>

        <section className="banner2">
          <h1>We Are Interpreting Experts</h1>
          <h2>Over 20 years of experience, 24 hours a day, 7 days a week.</h2>
          <img src={terpLogo} />
        </section>

        <section className="banner3">
          <div className="b3s">
            <h2>Who is Interpreter Source</h2>
            <p>With more than 20 years of experience, Interpreter Source LLC is the language service provider of choice for clients all across Florida. We provide the most qualified and dependable access to highly trained professional linguists 24 hours a day, 7 days a week for onsite and phone interpreting to local government entities, educational institutions, medical facilities, law firms, non-profit organizations and much more.</p>
          </div>
          <img src={detailImg} />
        </section>


        <div className="detailContent">
          <h1>Our Services</h1>
          <div className="ourServices">
            <div className="detailSection">
              <FontAwesomeIcon icon="phone-alt" size="5x" />
              <h4>24 Hour/Emergency <br />Medical Services</h4>
              <p>Interpreter Source LLC is a 24-Hour American Sign Language (ASL)interpreting agency
                     serving the North and Central Florida Deaf community day or night.</p>
            </div>

            <div className="detailSection">
              <FontAwesomeIcon icon="map-marked-alt" size="5x" />
              <h4>On-Site <br /> Interpreting Services</h4>
              <p>We provide on-site services, including but not limited, to legal, professional, education,
                     social and other consumer needs 24/7/365.</p>
            </div>

            <div className="detailSection">
              <FontAwesomeIcon icon="deaf" size="5x" />
              <h4>Deaf Blind/Tactile <br /> Interpreting Services</h4>
              <p>Interpreter Source LLC provides on-site tactile interpreting services for the Deaf Blind/Low
                    vision community with various degrees of vision and hearing loss</p>
            </div>

            <div className="detailSection">
              <FontAwesomeIcon icon="users" size="5x" />
              <h4>Certified/ADA Compliant <br /> Interpreting Services</h4>
              <p>We are experts who match each interpreter's skills to the situation needed: medical, legal,
                    court, business, educational, seminars, entertainment and more.</p>
            </div>

            <div className="detailSection">
              <FontAwesomeIcon icon="headset" size="5x" />
              <h4>On-Demand Phone <br /> Interpreting Services</h4>
              <p>Our phone interpreting solution is easy to use on any phone, connecting you to an interpreter
                     as scheduled. We can deliver connections you can depend on.</p>
            </div>

          </div>
        </div>

        <section className="banner4">
          <h1> Why Choose Us?</h1>
          <p>Intepreter Source's client satisfaction rate has made it the interpreting agency of choice throughout Jacksonville, Orange Park, St. Augustine, Palm Coast, Palatka, Daytona Beach, Ormond Beach, Orange City, Deland and Tampa, Florida. our client base includes local government entities, educational institutionas, medical facilities, laq firms, and non-profit organizations.</p>
          <p>For more information call us today at 904-687-1022</p>
        </section>


      </div>
    )
  }
}
import React from 'react'
import '../homeStyles/homePageDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function HomePageDetail(){
        return(
            <div className="detailContent">
            
                <h1>Our Services</h1>
                <div className="ourServices">
                <div className="detailSection">
                <FontAwesomeIcon icon="phone-alt" size="5x"/>
                    <h4>24 Hour/Emergency <br />Medical Services</h4>
                    <p>Interpreter Source LLC is a 24-Hour American Sign Language (ASL)interpreting agency
                     serving the North and Central Florida Deaf community day or night.</p>
                </div>

                <div className="detailSection">
                <FontAwesomeIcon icon="map-marked-alt" size="5x"/>
                    <h4>On-Site <br/> Interpreting Services</h4>
                    <p>We provide on-site services, including but not limited, to legal, professional, education,
                     social and other consumer needs 24/7/365.</p>
                </div>

                <div className="detailSection">
                <FontAwesomeIcon icon="deaf" size="5x"/>
                    <h4>Deaf Blind/Tactile <br/> Interpreting Services</h4>
                    <p>Interpreter Source LLC provides on-site tactile interpreting services for the Deaf Blind/Low 
                    vision community with various degrees of vision and hearing loss</p>
                </div>

                <div className="detailSection">
                <FontAwesomeIcon icon="users" size="5x"/>
                    <h4>Certified/ADA Compliant <br/> Interpreting Services</h4>
                    <p>We are experts who match each interpreter's skills to the situation needed: medical, legal, 
                    court, business, educational, seminars, entertainment and more.</p>
                </div>

                <div className="detailSection">
                <FontAwesomeIcon icon="headset" size="5x"/>
                    <h4>On-Demand Phone <br/> Interpreting Services</h4>
                    <p>Our phone interpreting solution is easy to use on any phone, connecting you to an interpreter
                     as scheduled. We can deliver connections you can depend on.</p>
                </div>

                </div>
                <h1>Why Choose Us?</h1>
                <p className="whyChooseDetails">Intepreter Source's client satisfaction rate has made it the interpreting agency of choice throughout Jacksonville, Orange Park, St. Augustine, Palm Coast, Palatka, Daytona Beach, Ormond Beach, Orange City, Deland and Tampa, Florida. our client base includes local government entities, educational institutionas,medical facilities, laq firms, and non-profit organizations.</p>
                <p>For more information call us today at 904-687-1022</p>

                
            </div>
        )
}
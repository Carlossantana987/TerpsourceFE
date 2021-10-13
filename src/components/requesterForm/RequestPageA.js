import React from 'react';
import RequestForm from './RequestFormA';
import hippaBadge from './image/hipaa-badge.png';


export default class RequestPage extends React.Component {
    render() {
        return (
            <div>
                <div className="bannerContainerR">
                    <div className="homebannerR">
                        <div className="homeContextR">
                            <h1>Interpreter Request</h1>
                            <h2>American Sign Language</h2>
                        </div>
                        <section>
                            ***NOTE: If you are making a request outside normal business hours (Mon-Fri 8:00am-5:00pm) or are trying to schedule an interpreter with less than 24hr notice, please call our urgent number at (904) 687-1022***
                        </section>
                    </div>
                </div>
                <section>
                <RequestForm />
                </section>
                <div className="hippaBadge">
                    <img alt="hippa badge" src={hippaBadge} />
                </div>
            </div>
        )
    }
}
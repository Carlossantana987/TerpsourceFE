import React from 'react';
import RequestForm from './RequestFormC';
import hippaBadge from './image/hipaa-badge.png';


export default class RequestPage extends React.Component {
    render() {
        return (
            <div>
                <div className="bannerContainerR">
                    <div className="homebannerR">
                        <div className="homeContextR">
                            <h1>Assingment Request</h1>
                            <h2>Cancellation</h2>
                        </div>
                        <section className="cancellationDetails">
                        ***Note: Assignments cancelled with less than 24hr notice, requires a call to notify our office of the cancellation. Cancellation of an assignment may not remove the client/customer from obligation of payment as agreed. Please contact us at (904) 687-1022 for more information.***
                        </section>
                    </div>
                </div>
                <RequestForm />
                <div className="hippaBadge">
                    <img alt="hippa badge"src={hippaBadge}/>
                </div>
            </div>
        )
    }
}
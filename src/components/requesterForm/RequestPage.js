import React from 'react'
import RequestForm from './RequestFormB'


export default class RequestPage extends React.Component{
    render(){
    return(
        <div>
        <h1>Interpreter Request</h1>
        <h2>American Sign Language</h2>
        <h3> Assignment Details </h3>
        <RequestForm />
        </div>
    )
    }
}
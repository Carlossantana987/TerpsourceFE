import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import './requestForm.scss';

export default class Requester extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:'',
            assignmentdate:'',
            assignmentstarttime:'',
            assignmentendtime:'',
            mr_case:'',
            requesttype:'',
            servicetypes:0,
            pointofcontent:'',
            address:'',
            city:'',
            state:'',
            zip:'',
            organization:'',
            department:'',
            requestorstitle:'',
            requestorsname:'',
            phonenumber:null,
            email:"",
            error:{}
        }
        // this.handleFirstName = this.handleFirstName.bind(this);
        // this.handleLastName = this.handleLastName.bind(this);
        // this.handleAssignDate = this.handleAssignDate.bind(this);
        // this.handleAssignStart = this.handleAssignStart.bind(this);
        // this.handleAssignEnd = this.handleAssignEnd.bind(this);
        // this.handleMrCase = this.handleMrCase.bind(this);
        // this.handleReqType = this.handleReqType.bind(this);
        // this.handleService = this.handleService.bind(this);
        // this.handlePointOfContact = this.handlePointOfContact.bind(this);
        // this.handleAddress = this.handleAddress.bind(this);
        // this.handleCity = this.handleCity.bind(this);
        // this.handleState = this.handleState.bind(this);
        // this.handleZip = this.handleZip.bind(this);
        // this.handleOrg = this.handleOrg.bind(this);
        // this.handleDepartment = this.handleDepartment.bind(this);
        // this.handleReqTitle = this.handleReqTitle.bind(this);
        // this.handleReqName = this.handleReqName.bind(this);
        // this.handlePhone = this.handlePhone.bind(this);
        // this.handleMail = this.handleMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleFirstName(e){
    //     e.preventDefault();

    //     if(e.target.value === ''){
    //         this.setState({firstname:''})
    //         console.log("invalid input")
    //     }else{
    //     this.setState({firstname:e.target.value})
    //     }
    // }
    // handleLastName(e){
    //     if(e.target.value === ''){
    //         this.setState({lastname:''})
    //         console.log("invalid input")
    //     }else{
    //     this.setState({lastname:e.target.value})
    //     }
    // }
    // handleAssignDate(e){
    //     this.setState({assignmentdate:e.target.value})
    // }
    // handleAssignStart(e){
    //     this.setState({assignmentstarttime:e.target.value})
    // }
    // handleAssignEnd(e){
    //     this.setState({assignmentendtime:e.target.value})
    // }
    // handleMrCase(e){
    //     this.setState({mr_case:e.target.value})
    // }
    // handleReqType(e){
    //     this.setState({requesttype:e.target.value})
    // }
    // handleService(option){
    //     let serviceNumber = option.target.value;
    //     if(serviceNumber === '0'){
    //         console.log('Invalid Form');
    //     }else{
    //     this.setState({servicetypes:parseInt(serviceNumber)})
    //     }
    // }
    // handlePointOfContact(e){
    //     this.setState({pointofcontent:e.target.value})
    // }
    // handleAddress(e){
    //     this.setState({address:e.target.value})
    // }
    // handleCity(e){
    //     this.setState({city:e.target.value})
    // }
    // handleState(e){
    //     this.setState({state:e.target.value})
    // }
    // handleZip(e){
    //     this.setState({zip:e.target.value})
    // }
    // handleOrg(e){
    //     this.setState({organization:e.target.value})
    // }
    // handleDepartment(e){
    //     this.setState({department:e.target.value})
    // }
    // handleReqTitle(e){
    //     this.setState({requestorstitle:e.target.value})
    // }
    // handleReqName(e){
    //     this.setState({requestorsname:e.target.value})
    // }
    // handlePhone(e){
    //     this.setState({phonenumber:e.target.value})
    // }
    // handleMail(e){
    //     this.setState({email:e.target.value})
    // }

    handleSubmit(e){
        e.preventDefault();
        
        const firstname = ReactDOM.findDOMNode(this._nameinput).value;

        console.log(firstname)

        
    
        axios.post('http://localhost:4000/consumerInfo/', this.state)
        .then(res =>{ 
            console.log(res)})
        .catch(err =>{console.log(err)});
        this.setState({
        firstname:"",
        lastname:'',
        assignmentdate:'',
        assignmentstarttime:'',
        assignmentendtime:'',
        mr_case:'',
        requesttype:'',
        servicetypes:0,
        pointofcontent:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        organization:'',
        department:'',
        requestorstitle:'',
        requestorsname:'',
        phonenumber:0,
        email:""})

       
    }


    render(){
        const servicetype = ['SELECT:','Education','Medical','Government','Legal','Business','Conference','Other']
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                {/* <h1>Service Request</h1>
                <div className="serviceTypeContainer">
                <div className="inputContainer">
                <h2>Service Type</h2>
                    <select options={servicetype.index} onChange={this.handleService}>
                        {servicetype.map((service, index) =>{
                            return(
                            <option key={index} value={index}>{service}</option>
                            )
                        })}
                    </select>
                    </div>

                    <div className="inputContainer">
                    <h2>Assignment Date</h2>
                    <input type='date' placeholder='mm/dd/yy' value={this.state.assignmentdate} onChange={this.handleAssignDate}></input>
                    </div>

                    <div className="inputContainer">
                    <h2>Expected Start Time</h2>
                    <input type='time' value={this.state.assignmentstarttime} onChange={this.handleAssignStart}/>
                    </div>

                    <div className="inputContainer">
                    <h2>Expected End Time</h2>
                    <input type='time' value={this.state.assignmentendtime} onChange={this.handleAssignEnd}/>
                    </div>

                    <div className="inputContainer"> */}
                    <h2>Conusmer's First Name</h2>
                    <input 
                    type="text" 
                    placeholder="Enter First Name" 
                    ref={nameInput => (this._nameInput = nameInput)}
                    />
                    {/* </div>

                    <div className="inputContainer">
                     <h2>Conusmer's Last Name</h2>
                    <input placeholder="Enter Here" value={this.state.lastname} onChange={this.handleLastName}/>
                    </div>

                    <div className="inputContainer">
                    <h2>MR#/CASE#</h2>
                    <input placeholder="Enter Here" value={this.state.mr_case} onChange={this.handleMrCase}/>
                    </div>

                    <div className="inputContainer">
                    <h2>Nature of Request</h2>
                    <input placeholder="Enter Here" value={this.state.requesttype} onChange={this.handleReqType}/>
                    </div>

                    <div className="inputContainer">
                    <h2>On-Site POC</h2>
                    <input placeholder="Enter Here" value={this.state.pointofcontent} onChange={this.handlePointOfContact}/>
                    </div>

                    </div>
                    <h1>Assignment Location</h1>

                    <div className="inputContainer">
                    <h3>Street Address</h3>
                    <input placeholder="Enter Here" value={this.state.address} onChange={this.handleAddress}/>
                    </div>

                    <div className="inputContainer">
                    <h3>City</h3>
                    <input placeholder="Enter Here" value={this.state.city} onChange={this.handleCity}/>
                    </div>

                    <div className="inputContainer">
                    <h3>State/Province</h3>
                    <input placeholder="Enter Here" value={this.state.state} onChange={this.handleState}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Postal/Zip Code</h3>
                    <input placeholder="Enter Here" value={this.state.zip} onChange={this.handleZip}/>
                    </div>

                    <h1>Requestor Information</h1>

                    <div className="inputContainer">
                    <h3>Oganization</h3>
                    <input placeholder="Enter Here" value={this.state.organization} onChange={this.handleOrg}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Department</h3>
                    <input placeholder="Enter Here" value={this.state.department} onChange={this.handleDepartment}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Requestor's Name</h3>
                    <input placeholder="Enter Here" value={this.state.requestorsname} onChange={this.handleReqName}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Requestor's Title</h3>
                    <input placeholder="Enter Here" value={this.state.requestorstitle} onChange={this.handleReqTitle}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Phone Number</h3>
                    <input placeholder="Enter Here" value={this.state.phonenumber} onChange={this.handlePhone}/>
                    </div>

                    <div className="inputContainer">
                    <h3>Email Address</h3>
                    <input placeholder="Enter Here" value={this.state.email} type="email" onChange={this.handleMail}/>
                    </div> */}

                    <p>PLEASE NOTE: The organization requesting service is responsible for obtaining prior approvals for interpreting services before the request for interpreting services is made.</p>

                    <p>I certify that I (REQUESTOR) am authorized to request this service on behalf of the (ORGANIZATION) in accordance with the approved/signed terms of agreement on file with INTERPRETER SOURCE LLC.</p>
                    <button type='submit'>Submit Request</button>
                </form>
            </div>
        )
    }
}
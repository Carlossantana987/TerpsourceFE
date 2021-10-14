import React from 'react'
import axios from 'axios';
import './requestForm.scss';
import { Formik, Field, Form } from 'formik';
import SigPad from './sigPad.js';
import * as Yup from 'yup';


const CustomInputComponent = (props) => (
    <textarea className="assignmentCancellationDetails" type="text" {...props}></textarea>
  );


const RequestFormB = () => {


    const DisplayingErrorMessagesSchema = Yup.object().shape({
        assignmentdate: Yup.string()
            .required('Required'),
        consumersName: Yup.string()
            .required('Required'),
        assignmentDetails: Yup.string()
            .required('Required'),
        //Requestor Details
        organization: Yup.string()
            .required('Required'),
        requestorsname: Yup.string()
            .required('Required'),
        phonenumber: Yup.string()
            .required('Required'),
        email: Yup.string()
            .required('Required')

    });


    return (
        <Formik
            initialValues={{
                assignmentdate: '',
                consumersName:'',
                assignmentDetails:'',
                organization: '',
                requestorsname: '',
                phonenumber: '',
                email: ''
            }}

            validationSchema={DisplayingErrorMessagesSchema}



            onSubmit={(values) => {
                console.log(values)
            }}
        >

            {({ isSubmitting, errors, touched }) => (
                <Form className="formContainer">

                    <section className='sectionR col2'>
                        <h2>Assignment Details</h2>

                        <label htmlFor="assignmentdate">Assignment Date</label>
                        <Field name="assignmentdate" type="date" />
                        {touched.assignmentdate && errors.assignmentdate && <div style={{ color: "red" }}>{errors.assignmentdate}</div>}


                        <label htmlFor="mr_case">Consumers Name</label>
                        <Field name="consumersName" type="text" />
                        {touched.consumersName && errors.consumersName && <div style={{ color: "red" }}>{errors.consumersName}</div>}


                        <label htmlFor="assignmentDetails">Assignment Details</label>
                        <Field name="assignmentDetails" as={CustomInputComponent}  placeholder="i.e. consumer has two separate meetings with current employer. First meeting with HR cancelled. Second meeting has been rescheduled to later date."/>
                        
                        {touched.assignmentDetails && errors.assignmentDetails && <div style={{ color: "red" }}>{errors.assignmentDetails}</div>}

                    </section>

                    <section className='sectionR col3'>
                        <h2>Requestor Details</h2>
                        <label htmlFor="organization">Organization</label>
                        <Field name="organization" type="text" />
                        {touched.organization && errors.organization && <div style={{ color: "red" }}>{errors.organization}</div>}


                        <label htmlFor="requestorsname">Requestor's Name</label>
                        <Field name="requestorsname" type="text" />
                        {touched.requestorsname && errors.requestorsname && <div style={{ color: "red" }}>{errors.requestorsname}</div>}


                        <label htmlFor="phonenumber">Phone Number</label>
                        <Field name="phonenumber" type="phone" />
                        {touched.phonenumber && errors.phonenumber && <div style={{ color: "red" }}>{errors.phonenumber}</div>}


                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        {touched.email && errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

                        <br/>

                        <Field name="sigpad" as={SigPad}/>
                        {touched.sigpad && errors.sigpad && <div style={{color:"red"}}>{errors.sigpad}</div>}
                        <p>I certify that I (REQUESTOR) am authorized to request this service on behalf of the (ORGANIZATION) in accordance with the approved/signed terms of agreement on file with INTERPRETER SOURCE LLC.</p>

                    </section>

                    <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Request Submitted" : "Submit"}</button>
                </Form>
            )}
        </Formik>
    )

}

export default RequestFormB
import React from 'react';
import './requestForm.scss';
import { Formik, Field, Form } from 'formik';
import SigPad from './sigPad.js';
import * as Yup from 'yup';


const RequestForm = () => {


    const DisplayingErrorMessagesSchema = Yup.object().shape({
        serviceType: Yup.string()
            .required('Required'),

        //Assingment Details
        firstname: Yup.string()
            .min(2, "too Short")
            .required('Required'),

        lastname: Yup.string()
            .min(2, 'Too Short')
            .required('Required'),

        assignmentdate: Yup.string()
            .required('Required'),

        assignmentstarttime: Yup.string()
            .required('Required'),

        assignmentendtime: Yup.string()
            .required('Required'),

        mr_case: Yup.string()
            .required('Required'),

        requesttype: Yup.string()
            .required('Required'),

        pointofcontent: Yup.string()
            .required('Required'),

        address: Yup.string()
            .required('Required'),

        city: Yup.string()
            .required('Required'),

        state: Yup.string()
            .required('Required'),

        zip: Yup.string()
            .required('Required'),

        //Requestor Details
        organization: Yup.string()
            .required('Required'),

        department: Yup.string()
            .required('Required'),

        requestorstitle: Yup.string()
            .required('Required'),

        requestorsname: Yup.string()
            .required('Required'),

        phonenumber: Yup.string()
            .required('Required'),

        email: Yup.string()
            .required('Required')

    });



    return(
        <Formik
            initialValues={{
                serviceType: '',
                firstname: '',
                lastname: '',
                assignmentdate: '',
                assignmentstarttime: '',
                assignmentendtime: '',
                mr_case: '',
                requesttype: '',
                pointofcontent: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                organization: '',
                department: '',
                requestorstitle: '',
                requestorsname: '',
                phonenumber: '',
                email: ''
            
            }}

            validationSchema={DisplayingErrorMessagesSchema}

            onSubmit={(values) => {
                console.log(values)
            }}
        >

            {({isSubmitting, errors, touched}) => (
                <Form className="formContainer">

                    <section className='sectionR col1'>

                        <h2 className="serviceType" id="my-radio-group">Servicetype:</h2>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="serviceType" value='Education' />
                            Education
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Medical' />
                            Medical
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Government' />
                            Government
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Legal' />
                            Legal
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Business' />
                            Business
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Conference' />
                            Conference
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value='Other' />
                            Other
                        </label>
                        </div>
                        {touched.serviceType && errors.serviceType && <div style={{ color: "red" }}>{errors.serviceType}</div>}
                    </section>


                    <section className='sectionR col2'>
                        <h2>Assignment Details</h2>
                        <label htmlFor="firstname">First Name</label>
                        <Field name="firstname" type="text" />
                        {touched.firstname && errors.firstname && <div style={{ color: "red" }}>{errors.firstname}</div>}

                        <label htmlFor="lastname">Last Name</label>
                        <Field name="lastname" type="text" />
                        {touched.lastname && errors.lastname && <div style={{ color: "red" }}>{errors.lastname}</div>}

                        <label htmlFor="assignmentdate">Assignment Date</label>
                        <Field name="assignmentdate" type="date" />
                        {touched.assignmentdate && errors.assignmentdate && <div style={{ color: "red" }}>{errors.assignmentdate}</div>}

                        <label htmlFor="assignmentstarttime">Assignment Start Time</label>
                        <Field name="assignmentstarttime" type="time" />
                        {touched.assignmentstarttime && errors.assignmentstarttime && <div style={{ color: "red" }}>{errors.assignmentstarttime}</div>}

                        <label htmlFor="assignmentendtime">Assignment End Time</label>
                        <Field name="assignmentendtime" type="time" />
                        {touched.assignmentendtime && errors.assignmentendtime && <div style={{ color: "red" }}>{errors.assignmentendtime}</div>}

                        <label htmlFor="mr_case">MR# CASE#</label>
                        <Field name="mr_case" type="text" />
                        {touched.mr_case && errors.mr_case && <div style={{ color: "red" }}>{errors.mr_case}</div>}

                        <label htmlFor="requesttype">Request Type</label>
                        <Field name="requesttype" type="text" />
                        {touched.requesttype && errors.requesttype && <div style={{ color: "red" }}>{errors.requesttype}</div>}

                        <label htmlFor="pointofcontent">Point of Content</label>
                        <Field name="pointofcontent" type="text" />
                        {touched.pointofcontent && errors.pointofcontent && <div style={{ color: "red" }}>{errors.pointofcontent}</div>}

                        <label htmlFor="address">Address</label>
                        <Field name="address" type="text" />
                        {touched.address && errors.address && <div style={{ color: "red" }}>{errors.address}</div>}

                        <label htmlFor="city">City</label>
                        <Field name="city" type="text" />
                        {touched.city && errors.city && <div style={{ color: "red" }}>{errors.city}</div>}

                        <label htmlFor="state">State</label>
                        <Field name="state" type="text" />
                        {touched.state && errors.state && <div style={{ color: "red" }}>{errors.state}</div>}

                        <label htmlFor="zip">Zip</label>
                        <Field name="zip" type="number" />
                        {touched.zip && errors.zip && <div style={{ color: "red" }}>{errors.zip}</div>}
                    </section>

                    <section className='sectionR col3'>
                        <h2>Requestor Details</h2>
                        <label htmlFor="organization">Organization</label>
                        <Field name="organization" type="text" />
                        {touched.organization && errors.organization && <div style={{ color: "red" }}>{errors.organization}</div>}


                        <label htmlFor="department">Department</label>
                        <Field name="department" type="text" />
                        {touched.department && errors.department && <div style={{ color: "red" }}>{errors.department}</div>}


                        <label htmlFor="requestorstitle">Requestors Title</label>
                        <Field name="requestorstitle" type="text" />
                        {touched.requestorstitle && errors.requestorstitle && <div style={{ color: "red" }}>{errors.requestorstitle}</div>}


                        <label htmlFor="requestorsname">Requestors Name</label>
                        <Field name="requestorsname" type="text" />
                        {touched.requestorsname && errors.requestorsname && <div style={{ color: "red" }}>{errors.requestorsname}</div>}


                        <label htmlFor="phonenumber">Phone Number</label>
                        <Field name="phonenumber" type="phone" />
                        {touched.phonenumber && errors.phonenumber && <div style={{ color: "red" }}>{errors.phonenumber}</div>}


                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        {touched.email && errors.email && <div style={{ color: "red" }}>{errors.email}</div>}


                        <p>PLEASE NOTE: The organization requesting service is responsible for obtaining prior approvals for interpreting services before the request for interpreting services is made.</p>

                        <Field name="sigpad" as={SigPad} />
                        {touched.sigpad && errors.sigpad && <div style={{color:"red"}}>{errors.sigpad}</div>}
                    
                        <p>I certify that I (REQUESTOR) am authorized to request this service on behalf of the (ORGANIZATION) in accordance with the approved/signed terms of agreement on file with INTERPRETER SOURCE LLC.</p>

                        
                    </section>

                    <button type='submit' disabled={isSubmitting}>{isSubmitting ? " Request Submitted " : "Submit"}</button>
                </Form>
            )}
        </Formik>

                        
    )

}

export default RequestForm
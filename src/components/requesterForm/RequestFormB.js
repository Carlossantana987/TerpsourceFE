import React from 'react'
import axios from 'axios';
import './requestForm.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const RequestForm = () => {

    const initialValues = {
        firstname: '',
        lastname: '',
        assignmentdate: '',
        assignmentstarttime: '',
        assignmentendtime: '',
        mr_case: '',
        requesttype: '',
        servicetypes: '',
        pointofcontent: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        organization: '',
        department: '',
        requestorstitle: '',
        requestorsname: '',
        phonenumber: 0,
        email: ''
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastname: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),

                email: Yup.string().email('Invalid email address').required('Required'),

                assignmentdate: Yup.string()
                    .required("Required"),

                assignmentstarttime: Yup.string()
                    .required("Required"),

                assignmentendtime: Yup.string()
                    .required("Required"),

                mr_case: Yup.string()
                    .required("Required"),

                requesttype: Yup.string()
                    .required("Required"),

                servicetypes: Yup.string()
                    .required("Required"),

                pointofcontent: Yup.string()
                    .required("Required"),

                address: Yup.string()
                    .required("Required"),

                city: Yup.string()
                    .required("Required"),

                state: Yup.string()
                    .required("Required"),

                zip: Yup.string()
                    .required("Required"),

                organization: Yup.string()
                    .required("Required"),

                department: Yup.string()
                    .required("Required"),

                requestorstitle: Yup.string()
                    .required("Required"),

                requestorsname: Yup.string()
                    .required("Required"),

                phonenumber: Yup.string()
                    .required("Required"),

            })}
            onSubmit={(values, actions) => {

                axios.post('http://localhost:4000/consumerInfo/', values)
                    .then(res => {
                        console.log(res)
                        console.log("request Sent")
                    })
                    .catch(err => { console.log(err) });


                actions.setSubmitting(false);
                actions.resetForm(initialValues);
            }}
        >
       
            <Form className="formContainer">
                <div id="my-radio-group">Servicetype</div>
                <div role="group" aria-labelledby="my-radio-group">
                    <label>
                        <Field type="radio" name="servictypes" value='1' />
              Education
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='2' />
              Medical
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='3' />
              Government
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='4' />
              Legal
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='5' />
              Business
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='6' />
              Conference
            </label>
                    <label>
                        <Field type="radio" name="servictypes" value='7' />
              Other
            </label>
                </div>

                <div className="assignmentDetails">
                <label htmlFor="firstname">First Name</label>
                <Field name="firstname" type="text" />
                <ErrorMessage name="firstname" />

                <label htmlFor="lastname">Last Name</label>
                <Field name="lastname" type="text" />
                <ErrorMessage name="lastname" />

                <label htmlFor="assignmentdate">assignmentdate</label>
                <Field name="assignmentdate" type="date" />

                <label htmlFor="assignmentstarttime">assignmentstarttime</label>
                <Field name="assignmentstarttime" type="time" />

                <label htmlFor="assignmentendtime">assignmentendtime</label>
                <Field name="assignmentendtime" type="time" />

                <label htmlFor="mr_case">mr_case</label>
                <Field name="mr_case" type="text" />

                <label htmlFor="requesttype">requesttype</label>
                <Field name="requesttype" type="text" />

                <label htmlFor="pointofcontent">pointofcontent</label>
                <Field name="pointofcontent" type="text" />

                <label htmlFor="address">address</label>
                <Field name="address" type="text" />

                <label htmlFor="city">city</label>
                <Field name="city" type="text" />

                <label htmlFor="state">state</label>
                <Field name="state" type="text" />

                <label htmlFor="zip">zip</label>
                <Field name="zip" type="number" />
</div>

                <label htmlFor="organization">organization</label>
                <Field name="organization" type="text" />

                <label htmlFor="department">department</label>
                <Field name="department" type="text" />

                <label htmlFor="requestorstitle">requestorstitle</label>
                <Field name="requestorstitle" type="text" />

                <label htmlFor="requestorsname">requestorsname</label>
                <Field name="requestorsname" type="text" />

                <label htmlFor="phonenumber">phonenumber</label>
                <Field name="phonenumber" type="number" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <p>PLEASE NOTE: The organization requesting service is responsible for obtaining prior approvals for interpreting services before the request for interpreting services is made.</p>

                <p>I certify that I (REQUESTOR) am authorized to request this service on behalf of the (ORGANIZATION) in accordance with the approved/signed terms of agreement on file with INTERPRETER SOURCE LLC.</p>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
    
}

export default RequestForm
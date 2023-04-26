import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link,useNavigate } from 'react-router-dom';
import './signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be at least 8 characters";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords must match";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          // alert(JSON.stringify(values, null, 2));
          // console.log(values.email,values.password);
          setSubmitting(false);
          try{
            createUserWithEmailAndPassword(auth,values.email,values.password);
            alert('registered');
            navigate('/',{replace:true});
          }catch(error){
            alert(error);
          }
      }}
    >
      {({ isSubmitting }) => (
        <Form className='signupform'>
        	<div className='form_header'>
        	<h2>Sign up</h2>
        	</div>
        	<div className='form_body'>
	        <Field type="text" name="firstName" placeholder="First Name" />
	        <ErrorMessage name="firstName" component="div" className='error' />
	        <Field type="text" name="lastName" placeholder="Last Name" />
	        <ErrorMessage name="lastName" component="div"  className='error'/>
	        <Field type="email" name="email" placeholder="Email" />
	        <ErrorMessage name="email" component="div"  className='error'/>
	        <Field type="password" name="password" placeholder="Password" />
	        <ErrorMessage name="password" component="div" className='error' />
	        <Field
	          type="password"
	          name="confirmPassword"
	          placeholder="Confirm Password"
	        />
	        <ErrorMessage name="confirmPassword" component="div" className='error' />
	        </div>
	        <div className='form_footer'>
	        <button type="submit" disabled={isSubmitting}>
	          Sign Up
	        </button>
	        <p>Already have an Account? <Link to="/login">Login</Link></p>
	        </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
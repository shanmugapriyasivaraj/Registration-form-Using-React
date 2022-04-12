import { Formik, Form, Field, ErrorMessage } from "formik";

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function AppFormik() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        emailId: "",
      }}
      validate={(values) => {
        const errors = {};
        if (values.fullName <= 5) {
          errors.fullName = "Full name should be atleast 6 characters";
        } else if (values.emailId <= 5) {
          errors.emailId = "Email should be atleast 6 characters";
        } else if (!validateEmail.test(values.emailId)) {
          errors.emailId = "Email is invalid";
        }
        return errors;
      }}
      onSubmit={() => {
        console.log("Form Submitted");
      }}
    >
      {() => {
        return (
          <>
            <p>Job Application Form</p>
            <Form>
              <div>
                <label>Full Name :</label>
                <Field name="fullName" type="text" />
                <ErrorMessage name="fullName" />
              </div>
              <br />
              <div>
                <label>Email Id :</label>
                <Field name="emailId" type="email" />
                <ErrorMessage name="emailId" />
              </div>
              <br />
              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
export default AppFormik;

import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      emailId: "",
      roleAppliedFor: "mern",
      coverLetter: "",
      termsAndCondition: true,
      errors: {
        fullName: "",
        emailId: "",
        coverLetter: "",
        termsAndCondition: "",
      },
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;

    const errors = this.state.errors;

    switch (name) {
      case "fullName": {
        if (value.length <= 5) {
          errors.fullName = "Full name should be atleast 6 characters";
        } else {
          errors.fullName = "";
        }
        break;
      }
      case "emailId": {
        if (value.length <= 5) {
          errors.emailId = "Email should be atleast 6 characters";
        } else if (!validateEmail.test(value)) {
          errors.emailId = "Email is invalid";
        } else errors.emailId = "";

        break;
      }
      case "coverLetter": {
        if (value.length <= 9) {
          errors.coverLetter = "cover Letter should be atleast 10 characters";
        } else {
          errors.coverLetter = "";
        }
        break;
      }
      case "termsAndCondition": {
        if (!value) {
          errors.termsAndCondition = "Terms should be accepted";
        } else {
          errors.termsAndCondition = "";
        }
        break;
      }
    }
    console.log(errors);

    this.setState({ [name]: value, errors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <p>Job Application Form</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name :</label>
            <input
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
              required
            ></input>
            <span>{this.state.errors.fullName}</span>
          </div>
          <br />
          <div>
            <label>Email Id :</label>
            <input
              name="emailId"
              type="email"
              value={this.state.emailId}
              onChange={this.handleChange}
              required
            ></input>
            <span>{this.state.errors.emailId}</span>
          </div>
          <br />
          <div>
            <label>Role Applied For</label>
            <select
              name="roleAppliedFor"
              value={this.state.roleAppliedFor}
              onChange={this.handleChange}
            >
              <option value="react">React Developer</option>
              <option value="node">Node Developer</option>
              <option value="mern">MERN Developer</option>
            </select>
          </div>
          <br />
          <div>
            <label>Cover Letter</label>
            <textarea
              name="coverLetter"
              value={this.state.coverLetter}
              onChange={this.handleChange}
              required
            ></textarea>
            <span>{this.state.errors.coverLetter}</span>
          </div>
          <br />
          <div>
            <input
              name="termsAndCondition"
              type="checkbox"
              checked={this.state.termsAndCondition}
              onChange={this.handleChange}
            ></input>
            <label>I Agree to T&C</label>
            <span>{this.state.errors.termsAndCondition}</span>
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default App;

import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      emailId: "",
      roleAppliedFor: "mern",
      coverLetter: "",
      termsAndCondition: true,
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;
    console.log(name, value);
    this.setState({ [name]: value });
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
            ></input>
          </div>
          <br />
          <div>
            <label>Email Id :</label>
            <input
              name="emailId"
              type="email"
              value={this.state.emailId}
              onChange={this.handleChange}
            ></input>
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
            ></textarea>
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

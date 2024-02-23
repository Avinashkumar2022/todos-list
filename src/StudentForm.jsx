import React, { Component } from 'react';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log('Form submitted with data:', this.state);
    // Clear form fields after submission
    this.setState({
      firstName: '',
      middleName: '',
      lastName: '',
      email: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Student Information Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Middle Name:</label>
            <input
              type="text"
              name="middleName"
              value={this.state.middleName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default StudentForm
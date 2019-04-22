import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="pink btn lighten-1 z-depth-0">
              Register
            </button>
             
          </div>
        </form>        
      </div>
    )
  }
}

export default SignUp

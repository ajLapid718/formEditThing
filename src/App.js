import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      edit: false
    }
    this.prevState = {};
  }

  handleSave = () => {
    this.setState({edit: false})
  }

  handleEdit = () => {
    this.prevState = this.state;
    this.setState({edit: true})
  }

  handleCancel = () => {
    this.setState(this.prevState);
    this.prevState = {};
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <div className="app">

        {this.state.edit === false
          ? <div>
              <div className="main">
                First Name: {this.state.firstName}
              </div>
              <div className="main">
                Last Name: {this.state.lastName}
              </div>
              <div className="main">
                <button onClick={this.handleEdit}>Edit</button>
              </div>
            </div>

          : <div>
              <div className="main">
                <form>
                  <div className="main">
                  <label>First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                  <br />
                  <label>Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                  </div>
                </form>
              </div>

              <div className="main">
                <button onClick={this.handleSave}>Save</button>
                <br />
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>}

      </div>
    );
  }
}

export default App;

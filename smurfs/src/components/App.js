import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: "",
      id: null,
      isEditing: false
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  };

  populateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: smurf.id,
      isEditing: true
    });
  };

  updateSmurf = e => {
    e.preventDefault();
    const editedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: this.state.id
    };
    console.log(editedSmurf);
    this.props.updateSmurf(this.state.id, editedSmurf);
    this.setState({
      name: "",
      age: "",
      height: "",
      isEditing: false
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Smurf Village!</h1>

        <form className="add-smurf-form" onSubmit={this.onSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.onChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Height"
            name="height"
            value={this.state.height}
            onChange={this.onChange}
          />
          {!this.state.isEditing ? (
            <button className="add-smurf-button" onClick={this.onSubmit}>
              Add Smurf!
            </button>
          ) : (
            <button className="add-smurf-button" onClick={this.updateSmurf}>
              Save Changes!
            </button>
          )}
        </form>

        <span className="smurfs-container">
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf">
                <p className="characteristic">Name: {smurf.name}</p>
                <p className="characteristic">Age: {smurf.age}</p>
                <p className="characteristic">Height: {smurf.height}</p>
                <button
                  className="delete-button"
                  onClick={e => this.deleteSmurf(e, smurf.id)}
                >
                  Delete Smurf
                </button>
                <button
                  className="edit-button"
                  onClick={e => this.populateForm(e, smurf)}
                >
                  Edit Smurf
                </button>
              </div>
            );
          })}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);

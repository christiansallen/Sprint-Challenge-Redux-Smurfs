import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village!</h1>
        <span className="smurfs-container">
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf">
                <p className="characteristic">Name: {smurf.name}</p>
                <p className="characteristic">Age: {smurf.age}</p>
                <p className="characteristic">Height: {smurf.height}</p>
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
  { getSmurfs, addSmurf }
)(App);

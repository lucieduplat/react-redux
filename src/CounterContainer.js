import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  Add1: () => dispatch({ type: "ADD" }),
  Remove1: () => dispatch({ type: "REMOVE" }),
  Ajout10: () => dispatch({ type: "AJOUT" }),
  Soustrait10: () => dispatch({ type: "SOUSTRAIT" }),
  Reset1: () => dispatch({ type: "RESET" })
});

const counterComponent = ({ counter, Add1, Remove1, Ajout10, Soustrait10, Reset1 }) => (
  <div>
    <p>{counter}</p>
    <button onClick={Add1}>1</button>
    <button onClick={Remove1}>-1</button>
    <button onClick={Ajout10}>+10</button>
    <button onClick={Soustrait10}>-10</button>
    <button onClick={Reset1}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counterComponent);
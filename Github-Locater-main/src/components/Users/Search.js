import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onSubmit = (e) => {
    if (this.state.text === "") {
      e.preventDefault();
      this.props.setAlert("Please enter something", "light");
    } else {
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //by using e.target.name even if value of name is changed it will be
  }; //added to the state
  render() {
    const { clearUser, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search Users"
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUser}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;

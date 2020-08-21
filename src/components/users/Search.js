import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }
  onSubmit = event => {

    event.preventDefault();
    this.props.searchUsers(this.state.text)
    this.setState({text: ''});

  }

  onChange = event => {
    this.setState({ text: event.target.value})

  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search User..." value={this.state.text} onChange={this.onChange} />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

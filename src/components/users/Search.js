import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GitHubContext from "../../context/github/gitHubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GitHubContext);
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    text === ""
      ? setAlert("Please enter something", "light")
      : githubContext.searchUsers(text);
    setText("");
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;

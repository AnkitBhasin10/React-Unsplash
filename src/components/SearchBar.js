import React from "react";

class SearchBar extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search here..."
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              //alternate way of writing above input code, in this case we don't need to write a separate function
              // <input type="text" onChange={(event)=>console.log(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

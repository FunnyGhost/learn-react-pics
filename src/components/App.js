import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

  onFormSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { Skeleton } from '../node_modules/react-skeleton-loading/src';

const MyLoader = () => <Skeleton />;

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyLoader />
      </div>
    );
  }
}

export default App;

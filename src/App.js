import React, { Component } from 'react';

import { Skeleton } from 'react-skeleton-loading';
import './App.css';

const MyLoader = () => <Skeleton height={200} width={200}/>;


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

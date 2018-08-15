import React, { Component } from 'react';
import './App.css';
import View1 from './components/View1';
import View2 from './components/View2';
import Nav from './components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingView1: true,
    };
  }

  switchViews = () => {
    this.setState((prevState) => ({
      isShowingView1: !prevState.isShowingView1
    }));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {
          this.state.isShowingView1 ?
            <View1 switchViews={this.switchViews} />
            :
            <View2 switchViews={this.switchViews} />
        }
      </div>
    );
  }
}

export default App;

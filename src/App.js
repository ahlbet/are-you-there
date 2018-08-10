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
      isShowingModal: false
    };
  }

  componentDidMount() {
    setTimeout(this.showModal, 10000);
  }

  showModal = () => {
    this.setState({
      isShowingModal: true
    });
    setTimeout(this.showView2, 5000);
  }

  resetView1 = () => {
    this.setState({
      isShowingModal: false,
      isShowingView1: true
    });
    setTimeout(this.showModal, 10000);
  }

  showView2 = () => {
    if (this.state.isShowingModal) {
      this.setState({
        isShowingView1: false,
        isShowingModal: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {
          this.state.isShowingView1 ?
            <View1 isShowingModal={this.state.isShowingModal} resetView1={this.resetView1} />
            :
            <View2 resetView1={this.resetView1} />
        }
      </div>
    );
  }
}

export default App;

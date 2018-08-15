import React, { Component } from 'react';
import Modal from './Modal';
import Cards from './Cards';
import Button from './Button';

class View1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false
    };
  }

  componentDidMount() {
    setTimeout(this.toggleModal, 10000);
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isShowingModal: !prevState.isShowingModal
    }), this.toggleLogic);
  }

  toggleLogic = () => {
    if (this.state.isShowingModal) {
      setTimeout(this.userDidNotClick, 5000);
    } else {
      setTimeout(this.toggleModal, 10000);
    }
  }

  userDidNotClick = () => {
    if (this.state.isShowingModal) {
      this.props.switchViews();
    }
  }

  render() {
    const modalContent = <Button handleClick={this.toggleModal} label={'I\'m still here'} />;
    return (
      <div>
        <div>
          <p className="challenge">YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT, IS TO READ EVERYTHING ON THE PAGE AND MEMORIZE IT</p>
          <Cards />
          {
            this.state.isShowingModal ?
              <Modal modalContent={modalContent} />
              :
              ''
          }
        </div>
      </div>
    );
  }
}

export default View1;
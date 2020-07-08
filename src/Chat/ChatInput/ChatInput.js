import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  onSend() {
    this.props.onMessageSend({
      role: ROLE.CUSTOMER,
      text: this.state.message,
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.onChangeMessage} value={this.state.message} />
        <button type="button" onClick={this.onSend}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;

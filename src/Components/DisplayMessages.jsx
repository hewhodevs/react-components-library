import React from 'react';

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }
  submitMessage() {
    let prevInput = this.state.input;
    let updatedMessages = [...this.state.messages, prevInput];
    this.setState({
      input: '',
      messages: updatedMessages
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map(message => {
            return(
              <li>{message}</li>
            );
          })}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
export default DisplayMessages;
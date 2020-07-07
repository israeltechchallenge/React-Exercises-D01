import React, { Component } from 'react'

/**
 * Implement a class component with a state
 * The state should include one property - count, initialized to 0
 * The component should render a div, with h1 in it says "Count: {count}"
 * and a button with the text "+1"
 * You should use onClick, to increase the count state by 1 every time the
 * button is clocked
 * the new value should be rendered in the h1 mentioned above 
 */
export default class CompWithState extends Component {
  // Your code
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleButtonClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleButtonClick()}>+1</button>
      </div>
    )
  }
}

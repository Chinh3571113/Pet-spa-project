import React, { Component } from 'react'

export default class CountClassCom extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
  render() {
    const increaseValue = () => {
        this.setState({count: this.state.count + 1});
    }
    return (
      <div>CountClassCom
        <p>Count: {this.state.count}</p>
        <button onClick={increaseValue} >Click</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Players } from './Shared/ListOfPlayers'
import ContentPre from './ContentPre'

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      playerData : Players,
    }
  }
  render() {
    return (
      <>
        <ContentPre playerDataOfMain = {this.state.playerData} />
      </>
    )
  }
}


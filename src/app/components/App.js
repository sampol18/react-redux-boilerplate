import React, { Component } from 'react'
import '../../client/styles/normalize.scss'
import '../../client/styles/main.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

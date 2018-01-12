import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FallingBoxes from '../shared/FallingBoxes'

export default class Intro extends Component {
  static propTypes = {
    helloText: PropTypes.string
  }
  static defaultProps = {
    helloText: "Hey."
  }
  render() {
    const { helloText } = this.props
    return (
      [<div key="first" className="container">               
        <div className="main dark-red">
          <h2>{ helloText }</h2>          
        </div>
        <FallingBoxes 
          colorClasses = { ['dark-red', 'light-red', 'red', 'light-green', 'dark-green'] }
          words={ { main:"I'm Leon", small:"A Developer" } }/>
      </div>,
      <div key="second" className="container red">
        <h2 className="main-words--center">A web developer to be exact.</h2>
      </div>]
    )
  }
}

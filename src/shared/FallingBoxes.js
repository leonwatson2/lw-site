import React, { Component } from 'react'
import PropTypes from 'prop-types'

const randNum = (start=1, end=10) =>{
  return Math.floor( (Math.random()*end) + start)
}

export default class FallingBoxes extends Component {
  static propTypes = {
    words: PropTypes.shape({
      main: PropTypes.string,
      small: PropTypes.string
    }),
    colorClasses: PropTypes.arrayOf(PropTypes.string),
  }
  constructor(){
    super()
    this.state = {
      gridTemplateColumns: null,
      boxes: []
    }
  }
  componentDidMount = () => {
    console.log("Mounted")
    this.setRandomGrid()
    this.setRandomBoxes()
  }
  setRandomGrid = () => {
    this.setState({ gridTemplateColumns: `${randNum()}fr ${randNum()}fr ${randNum()}fr 1fr`})
  }
  setRandomBoxes(){
    const { colorClasses } = this.props
    const numberOfElements = randNum(2, 4) * 4
    let boxes = []
    for (let i = 0; i < numberOfElements; i++) {
      boxes.push(<FallingBox key={i} colorClass={ colorClasses[ randNum(0, colorClasses.length) ] }/>)
    }
    this.setState({ boxes })
  }
  render() {
    const { words } = this.props
    const { boxes, gridTemplateColumns } = this.state
    console.log(gridTemplateColumns)
    return (
      <div className="falling-boxes" style={ { gridTemplateColumns } }>
        <h2 className="main-words fade-in--delay2">{ words.main }<small>{ words.small }</small></h2>
        { boxes }
      </div>
    )
  }
}

function FallingBox(props){
  const animationDuration = `${randNum(70, 120)/100}s`
  return (
    <div style = { { animationDuration } } className={props.colorClass + " box fade-in-main-color"}></div>
  )
}

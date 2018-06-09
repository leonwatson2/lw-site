import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Technology } from './Technologies'
import { projects } from '../tempData'
import Swipeable from 'react-swipeable'
export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array
  }
  static defaultProps = {
    projects: projects
  }  
  render() {
    const { projects } = this.props
    return (
      <div className="projects">
        {projects.map((p, i)=>{
          return <Project key={ i } project = {p} />
        })}        
      </div>
    )
  }
}

export class Project extends Component {
  constructor(){
    super()
    this.state = {
      shown: null,
      swipeLeftDelta: null,
      swipeRightDelta: null,
      swiping: false
    }
  }
  static propTypes = {
    project: PropTypes.object.isRequired,
  }
  static defaultProps = {
    project: { name: "", technologies: [ { name:"css3" } ], description:"lorem" }
  }
  swipingLeft = (e, absX) => {
    this.setState({ swipeLeftDelta:`${document.documentElement.clientWidth - absX}px`, swiping: true })
  }
  swipingRight = (e, absX) => {
    this.setState({ swipeRightDelta:`${absX}px`, swiping: true })
  }
  swipedLeft = (e, abs)=>{ 
    this.setState({ shown:true, swipeLeftDelta:null, swipeRightDelta:null, swiping: false }) 
  }
  swipedRight = (e, abs)=>{ 
    this.setState({ shown:false, swipeLeftDelta:null, swipeRightDelta:null, swiping: false }) 
  }
  render() {
    const { name, technologies, description } = this.props.project
    const { shown, swipeLeftDelta, swipeRightDelta, swiping } = this.state
    const classNames = `
                  ${ shown ? "project__technologies--shown": "project__technologies"} 
                  ${ swiping ? "swiping" : "" }
                  `
    let leftStyle = ""
    if(swipeLeftDelta && !shown){
      leftStyle = swipeLeftDelta
    }else if(swipeRightDelta && shown){
      leftStyle = swipeRightDelta
    }
                
    return (
      <Swipeable onSwipedLeft = { this.swipedLeft }
                  onSwipedRight = { this.swipedRight } 
                  onSwipingLeft = { this.swipingLeft }
                  onSwipingRight = { this.swipingRight }
                  preventDefaultTouchmoveEvent = {true}
                  className="project">
        <h3>{name}</h3>
        <div className="project__info">{description}</div>
        <div style = { { 'left': leftStyle } } className={ classNames }>
          {        
            technologies.map(t => ( 
                <Technology  key={t.name} name={ t.name } />
              )
            )
          }
        </div>
      </Swipeable>
    )
  }
}


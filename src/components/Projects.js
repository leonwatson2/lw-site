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
      shown: null
    }
  }
  static propTypes = {
    project: PropTypes.object.isRequired,
  }
  static defaultProps = {
    project: { name: "", technologies: [ { name:"css3" } ], description:"lorem" }
  }
  render() {
    const { name, technologies, description } = this.props.project
    const { shown } = this.state
    return (
      <Swipeable onSwipedLeft = {(e, abs)=>{ this.setState({shown:true}) }}>
        <div className="project">
          <h3>{name}</h3>
          <div className="project__info">{description}{shown}</div>
          <div className={`${ shown ? "project__technologies--shown": "project__technologies"}`}>
            {        
              technologies.map(t => ( 
                  <Technology  key={t.name} name={ t.name } />
                )
              )
            }
          </div>
        </div>
      </Swipeable>
    )
  }
}


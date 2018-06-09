import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/css/Technologies.css'
import TechIcon from '../shared/TechIcon'
import { technologies as fakeTechs } from '../tempData.json'
export default class Technologies extends Component {
  static propTypes = {
    technologies: PropTypes.arrayOf( PropTypes.shape({
        name: PropTypes.string,
      })),
    classNames: PropTypes.arrayOf(PropTypes.string)
  }
  static defaultProps = {
    technologies: fakeTechs,
    classNames: []
  }
  render() {
    const { technologies, classNames } = this.props
    return (
      <div className={["technologies", ...classNames ]}>
      <h3 className="technologies__text">Things I Know</h3>
        <div className="technologies__list">
          {
            technologies.map( t => <Technology key={t.name} name = {t.name} />)
          }
        </div>
        <div className="technologies__extra">The ones I like are in yellow because that's my favorite color.</div >
      </div>
    )
  }
}

export class Technology extends Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }
  static defaultProps = {
    name: "",
    classNames: []
  }
  constructor(){
    super()
    this.state = {
      active: false
    }
  }
  setActive = (bool, e)=>{
    this.setState({ active:bool });
  }
 
  render(){
    const { active } = this.state
    const { name } = this.props
    return <div 
                onTouchStart={ (e) => this.setActive(true, e) } 
                onTouchEnd={ (e) => this.setActive(false, e) }
                className={ `${active ? 'active':''} technologies__list--item` }
                >
                <div className="technologies__list--item-overlay">
                  {name}
                  <span style={ { display: 'block' } }></span>
                </div>
                <TechIcon name={name.toLowerCase()}/>
                </div>
  }
}
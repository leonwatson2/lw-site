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
      <h3 className="technologies__text">Things I Know
          
        </h3>
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
function throttle(amount, fn){
  setTimeout(() => {
    fn()
  }, amount);
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
      active: false,
      x: 0,
      y: 0
    }
    this.startX = null
    this.startY = null
  }
  setActive = (bool, e)=>{
    throttle(50, ()=> { e.preventDefault(); this.setState({ active:bool }) } )
    if(bool){
      this.startX = e.changedTouches[0].pageX
      this.startY = e.changedTouches[0].pageY
    }else{
      this.startX = null
      this.startY = null
    }
  }
  moveInfo = (e)=>{
    if(this.state.active && this.props.move) {
      e.persist()
      e.preventDefault()
      const { pageX, pageY } = e.changedTouches[0]
      console.log(e.changedTouches[0])
      const [xDist, yDist] = [ pageX - this.startX, pageY - this.startY ] 
      const x = xDist > 30 ? 30 : xDist < -30 ? -30 : xDist
      const y = yDist > 30 ? 30 : yDist < -30 ? -30 : yDist
      this.setState({ x, y })
    }  
  }
  render(){
    const { active, x, y } = this.state
    const { name } = this.props
    const transformStyle = { transform:`translate3d(${x}px, ${y}px, 0) scale(1.5)`}
    return <div 
                onTouchStart={ (e) => this.setActive(true, e) } 
                onTouchEnd={ (e) => this.setActive(false, e) }
                onTouchMove={ this.moveInfo }
                className={ `${active ? 'active':''} technologies__list--item` }
                style={ active ? transformStyle: {} }
                >
                <div className="technologies__list--item-overlay">
                  {name}
                  <span style={ { display: 'block' } }></span>
                </div>
                <TechIcon name={name.toLowerCase()}/>
                </div>
  }
}
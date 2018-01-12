import React, { Component } from 'react';
import Intro from './components/Intro'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import { getDeviceOrientation } from './shared/utils';
class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "Hey"
    }
  }
  componentDidMount = () => {
    this.setContainerHeights()
    window.addEventListener('resize', this.setContainerHeights)
    window.addEventListener('orientationchange', this.setContainerHeights)
  }
  setContainerHeights = () => {
    const orientation = getDeviceOrientation()
    this.setState({text:`${window.matchMedia("(orientation: portrait)").matches}`})
    
    const containers = document.querySelectorAll('.container')
    const newHeightOfContainer = orientation === 'portrait' ? window.screen.height : window.screen.width
    Array.from(containers).map(el => el.style.setProperty("--device-height", `${newHeightOfContainer}px`))
  }
  render() {
    const { text } = this.state
    return (
    <div className="wrapper" >
      <Intro helloText = {text}/>
      <div className="menu-toggle">
        {'<'}
      </div>
      <Technologies />
      <Projects />
    </div>
  );
  }
}

export default App;

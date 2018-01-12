import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSS3Icon from '../assets/icons/css3/css3-plain.svg'
import ReactIcon from '../assets/icons/react/react-original.svg'
import JavaScriptIcon from '../assets/icons/javascript/javascript-plain.svg'
import PythonIcon from '../assets/icons/python/python-plain.svg'
import BootstrapIcon from '../assets/icons/bootstrap/bootstrap-plain.svg'
import PHPIcon from '../assets/icons/php/php-plain.svg'
import AngularIcon from '../assets/icons/angularjs/angularjs-plain.svg'
import SassIcon from '../assets/icons/sass/sass-original.svg'
import HTML5Icon from '../assets/icons/html5/html5-plain.svg'
import JQueryIcon from '../assets/icons/jquery/jquery-plain.svg'
import MySQLIcon from '../assets/icons/mysql/mysql-plain.svg'
import NodeJsIcon from '../assets/icons/nodejs/nodejs-plain.svg'
import GitIcon from '../assets/icons/git/git-plain.svg'
import MongodbIcon  from '../assets/icons/mongodb/mongodb-plain.svg'
import SocketIoIcon from '../assets/socket-io.svg'
import WordPressIcon from '../assets/icons/wordpress/wordpress-plain.svg'
const map = {
  "css3": CSS3Icon,
  "react": ReactIcon,
  "javascript": JavaScriptIcon,
  "python": PythonIcon,
  "bootstrap": BootstrapIcon,
  "php": PHPIcon,
  "angularjs": AngularIcon,
  "sass": SassIcon,
  "html5": HTML5Icon,
  "jquery": JQueryIcon,
  "mysql": MySQLIcon,
  "nodejs": NodeJsIcon,
  "git": GitIcon,
  "mongodb": MongodbIcon,
  "socket.io": SocketIoIcon,
  "wordpress": WordPressIcon
}
export default class TechIcon extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    const { name } = this.props
    return (
      <img src={ map[name] } alt={name} title={name}/>
    )
  }
}

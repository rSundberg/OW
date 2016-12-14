import React, {Component} from 'react'
import {render} from 'react-dom'
import Styles from '../styles/home.css'
import Base from '../components/firebase/config.jsx'

import Logo from '../components/logo/logo.jsx'
import Navbar from '../components/navbar/navbar.jsx'

console.log(Base)

class Home extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <Navbar/>
      </div>
    )
  }
}

render(<Home/>, document.getElementById('root'))

import React, {Component} from 'react'
import {render} from 'react-dom'
import Styles from './home.css'
import Base from './firebase/config.jsx'
import Normalize from 'normalize.css'

import Logo from './logo.jsx'

console.log(Base)

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Logo/>
      </div>
    )
  }
}

render(<Home/>, document.getElementById('root'))

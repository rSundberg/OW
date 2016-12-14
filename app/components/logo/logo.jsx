import React, {Component} from 'react';
import Styles from './logo.css';

class Logo extends Component {
  constructor(props) {
    super(props)

    let setPos = (e) => {
      let x = ((e.clientX/20) - (window.innerWidth / 40)),
          y = ((e.clientY/20) - (window.innerHeight / 40))
      updateLogo(x,y)
    }

    let updateLogo = (x,y) => {
      let logo = document.querySelector(`${"." + Styles.logo}`)
      console.log(`${y}`, logo)

      logo.setAttribute("style", `${"top:" + y + "px; left:" + x + "px"}`)
    }

    document.addEventListener('mousemove', setPos, false);
  }

  render() {
    return (
      <div className={`${Styles.container}`}>
        <h1 className={`${Styles.logo}`}>Oliver Wyatt</h1>
      </div>
    )
  }
}


export default Logo

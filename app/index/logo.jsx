import React, {Component} from 'react';
import Styles from './logo.css';

import NavItem from './navItem.jsx'

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.state = {
      container: document.querySelector(`.${Styles.container}`),
      logo: document.querySelector(`.${Styles.logo}`),
      navItem: document.querySelectorAll(`.${Styles.navItem}`)
    }

    TweenMax.set(this.state.logo, {
      transformPerspective: 600,
      transformStyle:"preserve-3d"
    });

    TweenMax.set(this.state.navItem, {
      transformPerspective: 600,
      transformStyle:"preserve-3d"
    });

    let setPos = (e) => {

      let x = (e.clientX/window.innerWidth * 100),
          y = (e.clientY/window.innerHeight * 100),
          moveX = x - 50,
          moveY = y - 50,
          rotX = x - 50,
          rotY = 50 - y
          console.log(x, y)
      TweenMax.to(this.state.logo, .3, {y: moveY, x: moveX, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut})
      TweenMax.staggerTo(this.state.navItem, .8, {y: moveY, x: moveX, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut}, 0.1)
    }

    document.addEventListener('mousemove', setPos, false);
  }

  render() {
    return (
      <div>
        <div className={`${Styles.container}`}>
          <NavItem class={`${Styles.navItem}`} name="ONLINE BOUTIQUE"/>
          <div className={`${Styles.logo}`} id={"logo"}>Oliver Wyatt</div>
          <NavItem class={`${Styles.navItem}`} name="PERSONAL FEED"/>
        </div>
      </div>
    )
  }
}


export default Logo

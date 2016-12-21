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

    let setPos = (e) => {
      let x = ((e.clientX/20) - (window.innerWidth / 40)),
          y = ((e.clientY/20) - (window.innerHeight / 40)),
          rotX = ((-35)+(e.clientX/20)),
          rotY = ((35)-(e.clientY/15))
      TweenMax.set(this.state.logo, {
        transformPerspective: 600,
        transformStyle:"preserve-3d"
      });
      TweenMax.set(this.state.navItem, {
        transformPerspective: 600,
        transformStyle:"preserve-3d"
      });
      TweenMax.to(this.state.logo, .3, {y: y, x: x, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut})
      TweenMax.staggerTo(this.state.navItem, .8, {y: y, x: x, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut}, 0.1)
    }

    document.addEventListener('mousemove', setPos, false);
  }

  render() {
    return (
      <div className={`${Styles.container}`}>
        <div className={`${Styles.logo}`} id={"logo"}>Oliver Wyatt</div>
        <NavItem class={`${Styles.navItem}`} name="ONLINE BOUTIQUE"/>
        <NavItem class={`${Styles.navItem}`} name="PERSONAL FEED"/>
      </div>
    )
  }
}


export default Logo

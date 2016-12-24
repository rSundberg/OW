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
      
      let x = e.clientX/window.innerWidth * 100,
          y = e.clientY/window.innerHeight * 100,
          rotX = x - 50,
          rotY = 50 - y

          console.log("x: " + x + "y: " + y)
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
      <div>
        <div className={`${Styles.container}`}>
          <div className={`${Styles.logo}`} id={"logo"}>Oliver Wyatt</div>
          <div className={`${Styles.navbar}`}>
            <NavItem class={`${Styles.navItem}`} name="ONLINE BOUTIQUE"/>
            <NavItem class={`${Styles.navItem}`} name="PERSONAL FEED"/>
          </div>
        </div>
      </div>
    )
  }
}


export default Logo

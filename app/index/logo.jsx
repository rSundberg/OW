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
      divider: document.querySelector(`.${Styles.divider}`),
      logo: document.querySelector(`.${Styles.logo}`),
      navItem: document.querySelectorAll(`.${Styles.navItem}`)
    }

    TweenMax.set(this.state.logo, {
      transformPerspective: 100,
      transformStyle:"preserve-3d"
    })

    TweenMax.set(this.state.navItem, {
      transformPerspective: 100,
      transformStyle:"preserve-3d"
    })

    TweenMax.set(this.state.divider, {
      opacity: .6
    })

    TweenMax.set(this.state.navItem, {
      height: 0,
      width: 500,
      opacity: 0
    })

    const setPos = (e) => {

      let x = (e.clientX/window.innerWidth * 100),
          y = (e.clientY/window.innerHeight * 100),
          moveX = x - 50,
          moveY = y - 50,
          rotX = (x - 50)/4,
          rotY = (50 - y)/4

      if (x < 5 || x > 95 || y < 5 || y > 95) {
        TweenMax.to(this.state.divider, 1 , {opacity:.6})
        TweenMax.to(this.state.navItem, .5, {
          height: 0,
          width: 500,
          opacity: 0,
          ease: Power2.easeOut
        })
        TweenMax.to(this.state.logo, .6, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0
        })
      } else {
        TweenMax.to(this.state.divider, 1 , {opacity:0})
        TweenMax.to(this.state.navItem, .5, {
          height: 70,
          width: 180,
          opacity: 1,
          ease: Power2.easeOut
        })
        TweenMax.to(this.state.logo, .6, {y: moveY, x: moveX, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut})
        TweenMax.staggerTo(this.state.navItem, .6, {delay: .1, y: moveY, x: moveX, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut}, .1)
      }
    }

    document.addEventListener('mousemove', setPos, false);
  }

  render() {
    return (
      <div>
        <div className={`${Styles.container}`}>
          <div className={`${Styles.divider}`}></div>
          <div className={`${Styles.logo}`}>Oliver Wyatt</div>
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

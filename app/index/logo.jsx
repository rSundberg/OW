import React, {Component} from 'react';
import Styles from './logo.css';

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.state = {
      container: document.querySelector(`.${Styles.container}`),
      logo: document.querySelector(`.${Styles.logo}`)
    }

    let setPos = (e) => {
      let x = ((e.clientX/20) - (window.innerWidth / 40)),
          y = ((e.clientY/20) - (window.innerHeight / 40)),
          rotX = ((-35)+(e.clientX/20)),
          rotY = ((35)-(e.clientY/10))
      TweenMax.set(this.state.logo, {
        transformPerspective: 400
      });
      TweenMax.to(this.state.logo, .3, {y: y, x: x, rotationY: rotX, rotationX: rotY, ease: Sine.easeOut})
    }

    document.addEventListener('mousemove', setPos, false);
  }

  render() {
    return (
      <div className={`${Styles.container}`}>
        <h1 className={`${Styles.logo}`} id={"logo"}>Oliver Wyatt</h1>
      </div>
    )
  }
}


export default Logo

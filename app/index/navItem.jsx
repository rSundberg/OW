import React, {Component} from 'react'

class NavItem extends Component {
  render() {
    return (
      <div className={this.props.class}>{this.props.name}</div>
    )
  }
}

export default NavItem

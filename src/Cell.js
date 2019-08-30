import React, { Component } from 'react';

export default class Cell extends Component {

state = {
  color: this.props.color
    }

    handleClick = () => {
      console.log(this.state.color)
      const newColor = this.props.getSelectedColor()
      this.setState({
      color: newColor
      })
    }

  render() {
    // console.log(this.state.color);
    return (
      <div
      className="cell"
      style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}>
      </div>
    )
  }

}

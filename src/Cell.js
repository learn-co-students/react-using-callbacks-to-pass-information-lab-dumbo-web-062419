import React, { Component } from 'react';

export default class Cell extends Component {
  
  state = {
    color: this.props.color
  }

  clickHandler = () => {
    const newColor = this.props.getSelectedColor();
    this.setState({color: newColor});
  }
  
  render() {
    return (
      <div className="cell" onClick={this.clickHandler} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

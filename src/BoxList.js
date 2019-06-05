import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addBox(box) {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }

  handleDelete(id) {
    this.setState({boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  renderBoxes() {
    return (
      this.state.boxes.map(box => (
        <div>
          <div style={box} key={box.id} id={box.id} handleDelete={() => this.handleDelete(box.id)}></div>
          <button onClick={this.handleDelete} className="delete-btn">X</button>
        </div>

      ))
    )
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm addBox={this.addBox}/>
        {this.renderBoxes()}
      </div>
    )
  }
}

export default BoxList;

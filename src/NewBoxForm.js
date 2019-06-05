import React, { Component } from 'react';
import './NewBoxForm.css';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      backgroundColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {...this.state, id: uuid()};
    this.props.addBox(newBox);
    this.setState({ height: "", width: "", backgroundColor: "" });
  }

  render() {
    return (
      <form className="NewBoxForm" onSubmit={this.handleSubmit}>
        <label htmlFor='height'>Height: </label>
        <input
          id='height'
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='width'>Width: </label>
        <input
          id='width'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor='backgroundColor'>Background Color: </label>
        <input
          id='backgroundColor'
          name='backgroundColor'
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <button className="add-btn">Add Box</button>
      </form>
    )
  }
}

export default NewBoxForm;

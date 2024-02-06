import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" placeholder='search todo' className='form-control'  value={this.props.newTodoTitle}
        onChange={this.props.handleInput}/>
        <button className='btn btn-info' onClick={this.props.handleAddTodo}>All</button>
        <button className='btn btn-outline-secondary'>Active</button>
        <button className='btn btn-outline-secondary'>Done</button>
      </div>
    )
  }
}

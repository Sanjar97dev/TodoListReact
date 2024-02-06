import React, { Component } from 'react'

export default class TodoListItem extends Component {
  render() {
    return (
      <>
        <span className='d-flex justify-content-between'>
        <span className={`flex-grow-1 ${this.props.important ? 'important-task' : ''}`}
        onClick={() => this.props.toggleTodo(this.props.important)}>{this.props.title}</span>
        <button className='btn btn-outline-danger'onClick={() =>this.props.delBtn(this.props.id)}><i className="bi bi-trash2"></i></button>
        <button className='btn btn-outline-warning' onClick={() => this.props.toggleTask(this.props.id)}><i className="bi bi-exclamation-lg"></i></button>
        </span>
      </>
    )
  }
}

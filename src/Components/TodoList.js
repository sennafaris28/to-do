import React, { Component } from 'react'

class TodoList extends Component {
	componentDidUpdate() {
		this.props.inputElement.current.focus();
	}

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
              placeholder="t a s k" 
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit">Add New</button>
        </form>
      </div>
    </div>
    )
  }
}

export default TodoList

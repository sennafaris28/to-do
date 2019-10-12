import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import TodoItems from './Components/TodoItems';

class App extends Component {
  inputElement = React.createRef()
  state = {
    items: [],
    currentItem: {
      text: '',
      key: ''
    },
  };

  handleInput = (event) => {
    console.log('add input');
    const itemText = event.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    }
    this.setState ({
      currentItem,
    })
  }

  addItem = (event) => {
    event.preventDefault(); // Prevent default reaction of submit (reload)
    console.log('add item');
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState ({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState ({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="App">
      <TodoList 
        addItem={this.addItem} 
        inputElement={this.inputElement}
        handleInput={this.handleInput}
        currentItem={this.state.currentItem}
      />
      <TodoItems 
        entries={this.state.items}
        deleteItem={this.deleteItem}
      />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App

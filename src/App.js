import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <h1 className="App-title">Fun Food Friends</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form action="">
              <input type="text" name="username" placeholder="What's your name?" />
              <input type="text" name="currentItem" placeholder="What are you bringing?" />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="display-item">
              <ul></ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

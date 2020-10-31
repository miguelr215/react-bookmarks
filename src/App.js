import React, { Component } from 'react';
import './app.css';
import AddBookmark from './AddBookmark.js';
import BookmarkApp from './BookmarkApp.js';

// const bookmarks = [
//   {
//     title: 'Google',
//     url: 'http://www.google.com',
//     rating: '3',
//     description: '50-50 evil'
//   },
//   {
//     title: 'ESPN',
//     url: 'http://www.espn.com',
//     rating: '2',
//     description: 'great content, terrible UI & UX'
//   }
// ];

// bookmarks API key:  $2a$10$FDBbOeg4IS6b57HzJDD5XeQhJNe3SS6uBYaSERfZMrC3QMvjuHZP2
// user name: mr215
// pw: 7654321

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  setShowAddForm(show){
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark){
    this.setState({
      bookmarks: {...this.state.bookmarks, bookmark}, 
      showAddForm: false
    });
  }

  componentDidMount(){
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$FDBbOeg4IS6b57HzJDD5XeQhJNe3SS6uBYaSERfZMrC3QMvjuHZP2",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong, please try again')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          bookmarks: data, 
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      });
  }

  render(){
    const page = this.state.showAddForm
      ? <AddBookmark 
        showForm={show => this.setShowAddForm(show)}
        handleAdd={bookmark => this.addBookmark(bookmark)}/>
      : <BookmarkApp 
        bookmarks={this.state.bookmarks} 
        showForm={show => this.setShowAddForm(show)}/>

    return (
      <main className='App'>
        {page}
      </main>
    );
  }
}

export default App;

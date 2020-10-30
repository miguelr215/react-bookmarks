import React, { Component } from 'react';
import './app.css';
import AddBookmark from './AddBookmark.js';
import BookmarkApp from './BookmarkApp.js';

const bookmarks = [
  {
    title: 'Google',
    url: 'http://www.google.com',
    rating: '3',
    description: '50-50 evil'
  },
  {
    title: 'ESPN',
    url: 'http://www.espn.com',
    rating: '2',
    description: 'great content, terrible UI & UX'
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  render(){
    const page = this.state.showAddForm
      ? <AddBookmark />
      : <BookmarkApp bookmarks={this.state.bookmarks} />

    return (
      <main className='App'>
        {page}
      </main>
    );
  }
}

export default App;

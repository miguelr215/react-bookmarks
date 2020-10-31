import React, { Component } from 'react';
import './bookmarkapp.css';
import BookmarkList from './BookmarkList.js';
import Fab from './Fab.js';

class BookmarkApp extends Component {
    render(){
        return(
            <div className='bookmarkApp'>
                <h2>Bookmarks</h2>
                <BookmarkList bookmarks={this.props.bookmarks} />
                <Fab showForm={this.props.showForm}/>
            </div>
        )
    }
}

export default BookmarkApp;
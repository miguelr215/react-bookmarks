import React, { Component } from 'react';
import './bookmarkList.css';
import Bookmark from './Bookmark.js';

class BookmarkList extends Component {
    render(){
        const bookmarks = this
            .props
            .bookmarks
            .map((bookmark, index) => <Bookmark {...bookmark} key={index}/>);

        return(
            <div className='bookmarkList'>
                {bookmarks}
            </div>
        )
    }
}

BookmarkList.defaultProps = {
    bookmarks: []
};

export default BookmarkList;
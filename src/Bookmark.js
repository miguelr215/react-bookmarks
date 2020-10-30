import React from 'react';
import './bookmark.css';
import Rating from './Rating.js';

export default function Bookmark(props){
    return(
        <div className='bookmark'>
            <div className='bookmark_row'>
                <div className='bookmark_title'>
                    <a
                        href={props.url}
                        target='_blank'
                        rel='noopener noreferrer'>
                            {props.title}
                        </a>
                </div>
                <Rating value={props.rating} />
            </div>
            <div className='bookmark_description'>
                {props.description}
            </div>
        </div>
    )
}
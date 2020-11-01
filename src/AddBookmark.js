import React, { Component } from 'react';
import './addBookmark.css';
import Bookmark from './Bookmark';

class AddBookmark extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            url: '',
            description: '',
            rating: '1'
        }
    }

    titleChanged(title){
        this.setState({
            title
        })
    }

    urlChanged(url){
        this.setState({
            url
        })
    }

    descriptionChanged(description){
        this.setState({
            description
        })
    }

    ratingChanged(rating){
        this.setState({
            rating
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const {title, url, description, rating} = this.state;
        const bookmark = {title, url, description, rating};
        // how is url declared twice in curriculum?
        // what is the correct url
        const urlPost = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
        const options = {
            method: 'POST',
            body: JSON.stringify(bookmark),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer $2a$10$FDBbOeg4IS6b57HzJDD5XeQhJNe3SS6uBYaSERfZMrC3QMvjuHZP2'
            }
        };

        fetch(urlPost, options)
            .then(response => {
                if(!response.ok){
                    throw new Error('Something went wrong, try again later')
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: '',
                    url: '',
                    description: '',
                    rating: 1
                });
                this.props.handleAdd(bookmark)
            })
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
    }

    render(){
        const error = this.state.error
            ? <div className='error'>{this.state.error}</div>
            : '';

        return(
            <div className='addbookmark'>
                <h2>Add Bookmark</h2>
                {error}
                <form 
                    className='addbookmark__form'
                    onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='title'>Title: </label>
                    <input 
                        type='text' 
                        name='title' 
                        id='title' 
                        placeholder='Title'
                        value={this.state.title}
                        onChange={e => this.titleChanged(e.target.value)} />
                    <label htmlFor='url'>URL: </label>
                    <input 
                        type='text' 
                        name='url' 
                        id='url' 
                        placeholder='URL'
                        value={this.state.url}
                        onChange={e => this.urlChanged(e.target.value)} />
                    <label htmlFor='description'>Description: </label>
                    <textarea 
                        name='description' 
                        id='description' 
                        placeholder='Description'
                        value={this.state.description}
                        onChange={e => this.descriptionChanged(e.target.value)} />
                    <label htmlFor='rating'>Rating: </label>
                    <input
                        type='number'
                        name='rating'
                        id='rating'
                        min='1'
                        max='5'
                        value={this.state.rating}
                        onChange={e => this.ratingChanged(e.target.value)} />
                    <div className='addbookmark__buttons'>
                        <button onClick={e => this.props.showForm(false)}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>

                </form>
            </div>
        )
    }
};

export default AddBookmark;
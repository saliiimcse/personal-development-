import React from 'react';
import './Book.css'

const Book = (props) => {
    // console.log(props.book.name);
    const {cart, book} = props;
    const {id, name, author, img, time} = book;
    return (
        <div className='cart'>
            <img src={img} alt="Link did't work" />
            <h4>Name:{name}</h4>
            <h5>Author: {author}</h5>
            <p>Time Require: {time}s</p>
            <button onClick={() => {cart(time)}}>Add to list</button>
        </div>
    );
};

export default Book;
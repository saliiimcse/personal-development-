import { useEffect, useState } from 'react';
import React from 'react';
import './Layout.css'
import Book from '../Book/Book';

const Layout = () => {
    const [book, setBook] = useState([]);
    const [addCart, setCart] = useState(null);
    useEffect(() => {
          fetch('books.json')
          .then(res => res.json())
          .then(data => setBook(data));
        },[])
        
    const handleAddToCart = (book) =>{
        if (book) {
            setCart(addCart + parseInt(book))
        }
    }
    return (
        <div className='layoout'>
            {/* main secton */}
            <div className='main-section'>
                {
                    book.map(book => <Book 
                        book={book}
                        cart={handleAddToCart}
                        
                        ></Book>) 
                }
            </div>
           
            <div className='sidebar'>
                <h1>Salim Ahmed</h1>
                <h3>Dhaka</h3>
                <div>
                    <h2>Area Breaks</h2>
                </div>
                <div>
                    <h2>Book Details</h2>
                    <p>Reading Time: {addCart} </p>
                    <p>Break Time</p>
                    <button>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
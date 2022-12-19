import { useEffect, useState } from 'react';
import React from 'react';
import './Layout.css'
import Book from '../Book/Book';

const Layout = () => {
    const [book, setBook] = useState([]);
    const [addCart, setCart] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
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
    const showBreakTime = (time) =>{
        setBreakTime(time);
    }
    return (
        <div className='layoout'>
            {/* main secton */}
            <div className='main-section'>
                {
                    book.map(book => <Book 
                        book={book}
                        cart={handleAddToCart}
                        key={book.id}
                        ></Book>) 
                }
            </div>
           
            <div className='sidebar'>
                <h1>Salim Ahmed</h1>
                <h3>Dhaka</h3>
                <div>
                    <h2>Area Breaks</h2>
                    <div className='break-time'>
                    <button onClick={() => {setBreakTime(10)}}>10</button>
                    <button onClick={() => {setBreakTime(20)}}>20</button>
                    <button onClick={() => {setBreakTime(30)}}>30</button>
                    <button onClick={() => {setBreakTime(40)}}>40</button>
                    </div>
                </div>
                <div>
                    <h2>Book Details</h2>
                    <p>Reading Time: {addCart} min</p>
                    <p>Break Time: {breakTime} min</p>
                    <button>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
import { useEffect, useState } from 'react';
import React from 'react';
import './Layout.css'
import Book from '../Book/Book';

const Layout = () => {
    const [book, setBook] = useState([]);
    const [addCart, setCart] = useState(null);
    console.log(addCart);
    // const timeInteger = parseInt(addCart);
    // const sum = parseInt(addCart).reduce((partialSum, a) => partialSum + a, 0)
    // console.log(addCart);
    
    // const checkSum = () =>{
    //     const timeSum = [];
    //     addCart.map(data => timeSum.push(data.time));
    // }
    // console.log(timeSum);
  
    useEffect(() => {
          fetch('books.json')
          .then(res => res.json())
          .then(data => setBook(data));
        },[])
        // console.log(book);
    const handleAddToCart = (book) =>{
    //    const newCart = [...addCart, book];
       setCart(parseInt(book));
        // console.log(book);
        let sum = 0;
        console.log(sum);
          sum += parseInt(book);
        
        console.log(sum);
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
                    <p>Reading Time: {} </p>
                    <p>Break Time</p>
                    <button>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Layout;
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })
    }, [])

    return (
        <>
            <div className='container'>
                <h2 className='text-[#131313] text-[40px] font-[700] text-center playfair-font pt-[75px] pb-[35px]'>Books</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                    {
                        allBooks.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </div>
            </div>
        </>
    );
};

export default Books;
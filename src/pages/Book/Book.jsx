import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {image, tags, bookName, author, category, rating, bookId} = singleBook;

    return (
        <>
            <Link to={`/book_details/${bookId}`}>
                <div className='rounded-[16px] border border-[rgba(19,19,19,0.15)] p-[18px] flex flex-col justify-between gap-[16px] h-full'>
                    <div className='py-[32px] rounded-[16px] bg-[#F3F3F3]'>
                        <img className='w-[115px] h-[166px] object-cover mx-auto' src={image} alt="" />
                    </div>
                    <div className='flex items-center gap-[8px] pt-[8px]'>
                        {
                            tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-[14px] font-[500] rounded-[30px] bg-[rgba(35,190,10,0.05)] py-[6px] px-[12px]'>{tag}</span>)
                        }
                    </div>
                    <h2 className='text-[#131313] text-[24px] font-[700] playfair-font'>{bookName}</h2>
                    <p className='text-[rgba(19,19,19,0.80)] text-[18px] font-[500]'>By: {author}</p>
                    <span className='block w-full bg-[rgba(19,19,19,0.15)] h-[1px]'></span>
                    <div className='flex justify-between items-center'>
                        <span className='text-[rgba(19,19,19,0.80)] text-[16px] font-[500]'>{category}</span>
                        <span className='flex items-center gap-[8px] text-[rgba(19,19,19,0.80)] text-[16px] font-[500]'>{rating} <Star /></span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Book;
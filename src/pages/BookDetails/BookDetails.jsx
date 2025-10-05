import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId === bookId);
    
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleData
    
  

    return (
        <>
            <div className='container'>
                <div className='py-[50px] lg:py-[75px] grid lg:grid-cols-2 gap-[48px] items-center'>
                    <div className='rounded-[16px] bg-[rgba(19,19,19,0.05)] py-[35px] md:py-[75px] px-[20px]'>
                        <img className='w-[425px] h-[564px] object-cover rounded-[8px] mx-auto' src={image} alt="" />
                    </div>
                    <div>
                        <h2 className='text-[#131313] text-[30px] md:text-[40px] font-[700] playfair-font'>{bookName}</h2>
                        <h6 className='text-[rgba(19,19,19,0.80)] text-[20px] font-[500] pt-[16px] pb-[24px]'>By: {author}</h6>
                        <h4 className='text-[rgba(19,19,19,0.80)] text-[20px] font-[500] py-[16px] border-t border-b border-[rgba(19,19,19,0.15)]'>{category}</h4>
                        <p className='text-[16px] text-[rgba(19,19,19,0.7)] py-[24px]'><span className='text-[#131313] font-[700]'>Review:</span> {review}</p>
                        <div className='flex items-center gap-[16px] pb-[24px]'>
                            <span className='text-[16px] text-[#131313] font-bold'>Tag</span>
                            {
                                tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-[16px] font-[500] rounded-[30px] bg-[rgba(35,190,10,0.05)] py-[6px] px-[12px]'># {tag}</span>)
                            }
                        </div>
                        <ul className='flex flex-col gap-[12px] pt-[24px] pb-[30px] border-t border-[rgba(19,19,19,0.15)]'>
                            <li className='text-[16px] text-[rgba(19,19,19,0.7)]'>Number of Pages: <span className='text-[#131313] font-[700]'>{totalPages}</span></li>
                            <li className='text-[16px] text-[rgba(19,19,19,0.7)]'>Publisher: <span className='text-[#131313] font-[700]'>{publisher}</span></li>
                            <li className='text-[16px] text-[rgba(19,19,19,0.7)]'>Year of Publishing: <span className='text-[#131313] font-[700]'>{yearOfPublishing}</span></li>
                            <li className='text-[16px] text-[rgba(19,19,19,0.7)]'>Rating: <span className='text-[#131313] font-[700]'>{rating}</span></li>
                        </ul>
                        <div className='flex items-center gap-[16px]'>
                            <button className='text-[18px] text-[#131313] font-semibold py-[12px] px-[22px] rounded-[8px] border border-[rgba(19,19,19,0.3)] cursor-pointer bg-white'>Read</button>
                            <button className='text-[18px] text-white font-semibold py-[12px] px-[22px] rounded-[8px] bg-[#50B1C9] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetails;
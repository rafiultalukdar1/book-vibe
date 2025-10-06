import React from 'react';

const Boi = ({boi}) => {

    const {image, bookName, author, tags, category} = boi;

    return (
        <>
            <div className='rounded-[16px] border border-[rgba(19,19,19,0.15)] p-[24px] flex items-center gap-[24px]'>
                <div className='rounded-[16px] bg-[rgba(19,19,19,0.05)] py-[28px] px-[50px]'>
                    <img className='w-[130px] h-[172px] object-cover' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-[#131313] text-[24px] font-[700] playfair-font'>{bookName}</h2>
                    <p className='text-[rgba(19,19,19,0.80)] text-[18px] font-[500] py-[14px]'>By: {author}</p>
                    <div className='flex items-center gap-[16px] pb-[12px]'>
                        <span className='text-[16px] text-[#131313] font-bold'>Tag</span>
                        {
                            tags.map((tag, index) => <span key={index} className='text-[#23BE0A] text-[16px] font-[500] rounded-[30px] bg-[rgba(35,190,10,0.05)] py-[6px] px-[12px]'># {tag}</span>)
                        }
                    </div>
                    <h4 className='text-[rgba(19,19,19,0.80)] text-[18px] font-[500] py-[10px] border-t border-b border-[rgba(19,19,19,0.15)]'>{category}</h4>
                </div>
            </div>
        </>
    );
};

export default Boi;
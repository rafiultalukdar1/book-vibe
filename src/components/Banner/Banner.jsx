import React from 'react';
import bookImg from '../../assets/images/boi.png'


const Banner = () => {
    return (
        <>
            <div className='container'>
                <div className='py-[30px] md:py-[50px] lg:py-[80px] px-[30px] md:px-[50px] lg:px-[70px] xl:px-[120px] rounded-[14px] md:rounded-[24px] bg-[rgba(19,19,19,0.05)] flex flex-col md:flex-row justify-between md:items-center gap-[20px]'>
                    <div className='order-2 md:order-1'>
                        <h2 className='text-[#131313] text-[30px] md:text-[36px] lg:text-[56px] font-[700] playfair-font'>Books to freshen up <br /> your bookshelf</h2>
                        <button className='text-white text-[16px] md:text-[18px] lg:text-[20px] font-[700] rounded-[8px] bg-[#23BE0A] py-[10px] md:py-[15px] px-[22px] md:px-[32px] mt-[20px] lg:mt-[45px] cursor-pointer'>View The List</button>
                    </div>
                    <div className='order-1 md:order-2'>
                        <img className='max-w-[235px] md:max-w-[250px] lg:max-w-full mx-auto' src={bookImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
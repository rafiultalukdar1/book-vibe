import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className='container'>
                <div className='h-[100vh] flex flex-col justify-center items-center gap-[15px] lg:gap-[25px]'>
                    <img className='max-w-[250px] lg:max-w-[350px]' src="https://i.ibb.co.com/GQLwsSJq/Screenshot-6-removebg-preview.png" alt="" />
                    <h2 className='text-[22px] lg:text-[30px] font-[600]'>Not Fount: 404 Status</h2>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
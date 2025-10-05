import React, { useState } from 'react';
import { NavLink } from 'react-router';
import bookLogo from '../../assets/images/book-logo.png'
import { TextAlignJustify, X } from 'lucide-react';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`absolute top-0 w-[290px] h-full bg-[#fff] shadow-[6px_0_6px_rgba(0,0,0,0.1)] flex flex-col gap-[35px] duration-500  ${open ? 'left-0' : 'left-[-290px]'}`}>
                <div className='py-[28px] px-[15px] border-b border-[#1414144f]'>
                    <img className='max-w-[110px] cursor-pointer' src={bookLogo} alt="" />
                </div>
                <div>
                    <nav className='mobile-nav flex flex-col gap-[12px]'>
                        <NavLink className='' to="/">Home</NavLink>
                        <NavLink className='' to="/listed_books">Listed Books</NavLink>
                        <NavLink className='' to="/Pages_to_read">Pages to Read</NavLink>
                    </nav>
                </div>
                <div className='flex flex-col gap-[12px] px-[15px]'>
                    <button className='nav-button bg-[#23BE0A] w-[100]'>Sign In</button>
                    <button className='nav-button bg-[#59C6D2] w-[100]'>Sign Up</button>
                </div>
            </div>

            <div className='py-[28px] shadow-[0_2px_6px_rgba(0,0,0,0.1)]'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <img className='max-w-[110px] cursor-pointer' src={bookLogo} alt="" />
                    </div>
                    <nav className='nav-bar hidden md:block'>
                        <NavLink className='nav-items' to="/">Home</NavLink>
                        <NavLink className='nav-items' to="/listed_books">Listed Books</NavLink>
                        <NavLink className='nav-items' to="/Pages_to_read">Pages to Read</NavLink>
                    </nav>
                    <div className='items-center gap-[12px] hidden md:flex'>
                        <button className='nav-button bg-[#23BE0A]'>Sign In</button>
                        <button className='nav-button bg-[#59C6D2]'>Sign Up</button>
                    </div>
                    <div className='md:hidden'>
                        <span className='cursor-pointer' onClick={() => setOpen(!open)}>{open ? <X /> : <TextAlignJustify />}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
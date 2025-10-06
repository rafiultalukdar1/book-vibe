import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/script';
import Boi from '../Boi/Boi';

const ListedBooks = () => {

    const [readList, setReadList] = useState([]);

    const data = useLoaderData();
    
    useEffect(() => {
        const storeBookData = getStoreBook();
        const convertStoreBook = storeBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertStoreBook.includes(book.bookId));
        setReadList(myReadList)
    },[]);


    return (
        <>
            <div className='py-[70px]'>
                <div className='container'>
                    <h2 className='w-full rounded-[16px] bg-[rgba(19,19,19,0.05)] py-[32px] text-[#131313] text-center text-[28px] font-[700]'>Books</h2>
                    <div className='py-[40px]'></div>
                    <Tabs>
                        <TabList className='pb-[30px]'>
                            <Tab>Read Books</Tab>
                            <Tab>Wishlist Books</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='flex flex-col gap-[24px]'>
                                {
                                    readList.map(boi => <Boi key={boi.bookId} boi={boi}></Boi>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default ListedBooks;
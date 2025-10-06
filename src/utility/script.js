const getStoreBook = () => {
    const storeBookSTR = localStorage.getItem('readList')

    if(storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else {
        return [];
    }
}

const addStoreDB = (id) => {
    const storeBookData = getStoreBook();

    if(storeBookData.includes(id)) {
        alert('already axist')
    }
    else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('readList', data);
        alert('Book added to Read List');
    }
}

export {addStoreDB, getStoreBook};
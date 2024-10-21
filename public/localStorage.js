const getStorageCrad = () => {
    const storageCardString = localStorage.getItem('card')
    if(storageCardString){
        return JSON.parse(storageCardString)
    }
    else{
        return []
    }

}

const saveCardLs = cart =>{
    const cartStringyfy = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringyfy)
}

const addToLS = id =>{
    const cart = getStorageCrad(id);
    cart.push(id)
    saveCardLs(cart)
}
const removeformlocalstorage = id =>{
    const cart = getStorageCrad();
    // removeing every id
    const remaining = cart.filter(idx => idx !== idx)
}

export{addToLS,getStorageCrad,removeformlocalstorage}
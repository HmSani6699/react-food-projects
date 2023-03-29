const addToDb = (id) => {
    const storedCart = getCartInLocalStorage();
    const quantity = storedCart[id]
    if (!quantity) {
        storedCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        storedCart[id] = newQuantity;
    }
    localStorage.setItem('carts-stored', JSON.stringify(storedCart))

}


const getCartInLocalStorage = () => {
    let storedCart;
    const getCart = localStorage.getItem('carts-stored');
    if (getCart) {
        storedCart = JSON.parse(getCart)
    }
    else {
        storedCart = {}
    }
    return storedCart;
}

export {
    addToDb,
    getCartInLocalStorage
}
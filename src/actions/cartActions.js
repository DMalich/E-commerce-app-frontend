export const addToCart = (pizza, quantity, size) => (dispatch, getState) => {
    let cartItems = {
        name: pizza.name,
        _id: pizza._id,
        size: size,
        quantity: Number(quantity),
        image: pizza.image,
        prices: pizza.prices, 
        price: pizza.prices[0][size] * quantity,
    };

    if (cartItems.quantity > 10) {
        alert('this pizza is out of stock');
    } else {
        if (cartItems.quantity < 1) {
            dispatch({ type: "DELETE_ITEM", payload: pizza });
        } else {
            dispatch({ type: "ADD_TO_CART", payload: cartItems });
        }
    }

    const cartItem = getState().cartReducer.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(cartItem));
};

export const deleteItem = (pizza) => (dispatch, getState) => {
    dispatch({ type: "DELETE_ITEM", payload: pizza });
    const cartItem = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
};

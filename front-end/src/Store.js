import { createContext, useReducer } from 'react'

export const Store = createContext();
const initialState = {
    cart:{
        cartItmes : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
    wish:{
        wishItmes : localStorage.getItem('wishItmes') ? JSON.parse(localStorage.getItem('wishItmes ')) : []
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = action.payload
            const existsItem = state.cart.cartItmes.find((item) => item._id === newItem._id);
            const cartItmes = existsItem ? state.cart.cartItmes.map((item) => item._id === existsItem._id ?
                newItem : item) : [...state.cart.cartItmes, newItem];
            localStorage.setItem('cartItems', JSON.stringify(cartItmes));
            return { ...state, cart: { ...state.cart, cartItmes } }
        }
        
        case 'ADD_TO_WISH': {
            const newItem = action.payload
            const existsItem = state.wish.wishItmes.find((item) => item._id === newItem._id);
            const wishItmes = existsItem ? state.wish.wishItmes.map((item) => item._id === existsItem._id ?
                newItem : item) : [...state.wish.wishItmes, newItem];
            localStorage.setItem('wishItmes', JSON.stringify(wishItmes));
            return { ...state, wish: { ...state.wish, wishItmes } }
        }
        default:
            return state;
    }
}

export function StoreProvider(props){
    const [state , dispatch] = useReducer(reducer , initialState);
    const value = {state , dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
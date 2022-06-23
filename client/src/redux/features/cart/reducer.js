import { getItem } from "../../../utils/localstorage";
import { ADD_TO_CART_SUCCESS, REMOVE_FROM_CART } from "./actionTypes";


const initState = {
    cartProducts: getItem('cartProducts') || [],
    orderSummary: getItem('orderSummary') || {
        subTotal: 0,
        shipping: 0,
        total: 0
    }
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_SUCCESS:
            console.log('payload:', payload);
            return {
                ...state,
                cartProducts: [...state.cartProducts, payload.data],
                orderSummary: { ...state.orderSummary, ...payload.orderSummary },
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts: state.cartProducts.filter((e, i) => i !== payload.index),
                orderSummary: { ...state.orderSummary, ...payload.orderSummary },
            };
        default:
            return state;
    }
};
import {ActionTypes} from "../types/actionTypes";

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (state) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: state
    };
};

export const removeProduct = (id) => {
    return{
        type: ActionTypes.REMOVE_PRODUCT,
        payload: id
    };
};

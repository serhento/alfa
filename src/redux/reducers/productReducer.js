import {ActionTypes} from "../types/actionTypes";

const initialState = {
    products: [],
    likedProducts: []
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        case ActionTypes.SELECTED_PRODUCTS:
            if (payload.length === 0){
                state.likedProducts = [];
            }
            payload.map(function (idx) {
                state.products.map(item=>{
                    if (item.id === parseInt(idx)){
                        state.likedProducts.push(item);
                    }
                })
            });
            return {...state, products: state.likedProducts};
        case ActionTypes.REMOVE_PRODUCT:
            return {...state, products: state.products.filter((item)=> item.id !== payload)};
        default:
            return state;
    }
};

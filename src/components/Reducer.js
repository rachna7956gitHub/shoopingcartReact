export const reducer = (state, action) => {
    if(action.type === 'REMOVE_ITEM'){
        return{
            ...state,
            item:state.item.filter((curelem) => {
                return curelem.id !== action.payload
            }
            )}
    }

    if(action.type === 'CLEAR_CART'){
        return{
            ...state,
            item: []
 }
    }

if(action.type === 'INCREMENT'){
    let newCart = state.item.map((curelem) => {
        if(curelem.id === action.payload){
            return{...curelem,
                quantity:curelem.quantity + 1
            }
        }
        return curelem

    })
    return {...state, item:newCart}
}


if(action.type === 'DECREMENT'){
    const newCart = state.item.map((curelem) => {
        if(curelem.id === action.payload){
            return{...curelem,
            quantity : curelem.quantity - 1 }
        }
        return curelem
    }).filter((curelem) =>  curelem.quantity !== 0);
    return{...state, item : newCart}
}


if(action.type === 'ALL_TOTAL'){
    let { totalItem, totalAmount} = state.item.reduce((accumulator, curVal) => {
        let { quantity, price} = curVal;

        let newTotalAmount = price*quantity;
        accumulator.totalAmount += newTotalAmount
        accumulator.totalItem += quantity;

        return accumulator 
     }, {
        totalItem:0,
        totalAmount :0
    });
    return{...state, totalItem, totalAmount };
}
     return state;
}
import React, { createContext, useReducer, useEffect } from 'react'
import './Cart.css';
import { products } from './Products';
import Contextcart from './Contextcart';
import { reducer } from './Reducer'


export const cartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem:0,
}

const Cart = () => {
  // const [item, setItem] = useState(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  // delet items from cart

  const removeItem = () => {

    return dispatch({
      type :'REMOVE_ITEM',
    });

  };
  //remove all carts

  const allclearcart = (id) =>{
    return dispatch({
      type : 'CLEAR_CART',
      payload: id,

    })
  };

  const inc = (id) => {
    return dispatch({
      type: 'INCREMENT',
      payload: id
    })
  };

  const dec = (id) => {
    return dispatch({
      type: 'DECREMENT',
      payload: id
    })
  };

  useEffect(() => {
    dispatch({type: 'ALL_TOTAL'});   //when we want to change in item state then it will run 
           
  }, [state.item])
  

    return (
      <>

      <cartContext.Provider value={{...state, removeItem, allclearcart, inc, dec}}>

        <Contextcart />
        </cartContext.Provider>
      </>
      );
      }

    
            
export default Cart
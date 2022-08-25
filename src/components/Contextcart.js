import React, { useContext } from 'react'
import Items from './Items';
import {cartContext} from './Cart'

const Contextcart = () =>{

 const {item, allclearcart, totalAmount,totalItem} = useContext(cartContext);

 if(item.length === 0){
     return (
         <>
         <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
                    <h3>Continue shopping</h3>
                </div>

                <div className='cart-icon'>
                    <img src='./images/cart.png' alt='cart' />
                    <p>0</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span>items in shopping cart</p>

                </section>

         </>
     )
 }

  return (
    <>
    <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
                    <h3>Continue shopping</h3>
                </div>

                <div className='cart-icon'>
                    <img src='./images/cart.png' alt='cart' />
                    <p>7</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span>items in shopping cart</p>

                <div className='cart-items'>
                    <div className='cart-items-container'>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem}/>

                            })
                        }
                         
                        
                  </div>
                </div>
                <div className='card-total'>
                    <h3>Cart Total : <span>{totalAmount}rs</span></h3>
                    <button>Checkout</button>
                    <button className='clear-cart' onClick={allclearcart}>Clear Cart</button>
                </div>

            </section>

        </>
    )
}



export default Contextcart;

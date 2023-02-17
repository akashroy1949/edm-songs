import React from 'react';
import '../css/cart.css'

function Cart({ cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) {

    const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div className='cart-items'>
            <h1 className='cart-items-header'>CART ITEMS</h1>
            <div className='clear-cart-button'>
                {cartItems.length >= 1 && (
                    <button className='btn btn-outline-dark' onClick={handleClearCart}>Clear Cart</button>
                )}
            </div>

            {cartItems.length === 0 &&
                <div className='cart-items-empty'>
                    <div className='empty-item-1'>Your cart is Empty!</div>
                    <div className='empty-item-2'>Add items to it now.</div>
                    
                    <a href='/songs'><button className='btn btn-outline-dark' >ADD NOW</button></a>
                </div>
            }

            <div className='cart-all-list'>
                {cartItems.map((item) => {
                    return (
                        <div key={item.key} className="cart-items-list">
                            <img className='cart-items-image'
                                src={item.imgsrc}
                                alt={item.name}
                            />

                            <div className='cart-items-name'>
                                {item.artist} - {item.name}
                            </div>

                            <div className='cart-items-function'>
                                <button className='btn btn-outline-dark m-1 px-2.5' onClick={() => handleAddProduct(item)}>+</button>
                                <button className='btn btn-outline-dark px-2.5' onClick={() => handleRemoveProduct(item)}>-</button>
                            </div>

                            <div className='cart-items-price'>
                                {item.quantity} * ${item.price}
                            </div>
                        </div>
                    );
                })

                }
            </div>
            <div className='cart-items-total-price-name'>
                Total Price:&nbsp;
                <span className='cart-items-total-price'>${totalprice}</span>
            </div>
        </div>
    );
}

export default Cart;
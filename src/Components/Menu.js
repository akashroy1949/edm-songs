import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs';
import Cart from './Cart';
import EdmNav from './EdmNav';
import '../css/menu.css'

const Menu = ({ songItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart }) => {
    return (
        <>
            <div className="bg-color navbar navbar-expand-lg sticky-top rounded-bottom-5">
                <nav className="container-fluid navigation-bar" >
                    <nav className="navbar nav-brand">
                        <a href="https://www.brightlandrecords.com">
                            <img src="https://i1.sndcdn.com/avatars-8cysSHpcCx43OpqM-axYacA-t500x500.jpg" width="50" height="50" alt="Brightland Records" />
                            <p className='text-dark'>Brightland Records</p>
                        </a>
                    </nav>
                    <div>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <NavLink className='nav-link text-white' to='/aboutus'>
                                    <button className='btn btn-outline-dark'>ABOUT US</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-link text-white' to='/songs'>
                                    <button className='btn btn-outline-dark'>SONGS</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-link text-white' to='/cart'>
                                    <button className='btn btn-outline-dark'>CART</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-link search-total' to='/songs/'>
                                    <input class="form-control form-link search-textbox nav-link" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class=" btn btn-outline-dark text-decoration-none" type="submit">Search</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Routes>
                <Route exact path='/aboutus' element={<AboutUs />} />
                <Route exact path='/songs' element={<EdmNav
                    songItems={songItems}
                    handleAddProduct={handleAddProduct}
                />} />
                <Route exact path='/cart' element={<Cart
                    cartItems={cartItems}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    handleClearCart={handleClearCart}
                />} />
            </Routes>

        </>

    );
}

export default Menu;




/*<li>
    <NavLink className='nav-link text-white' to='/cart' style={({ isActive }) => ({
        fontSize: isActive ? '20px' : 'medium',
        color: isActive ? 'orange' : 'white'
    })}>CART</NavLink>
</li> */
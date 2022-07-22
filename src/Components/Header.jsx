import React from 'react'
import Sidebar from './Sidebar'

export default function Header({ ToggleMenu, status }) {
  return (
    <>
        <Sidebar ToggleMenu={ToggleMenu} status={status}/>
        <header className='header'>
            <nav className='header__uppernav'>
                <ul className='header__uppernav__list padding__aM'>
                    <li className='header__uppernav__left'>
                        <a href="#">ECommerce</a>
                    </li>
                    <li onClick={() => ToggleMenu()} className="hide-for-tablet">
                        <ul className='header__menuBtn'>
                            <li>
                                <span className="hide-for-tablet"></span>
                                <span className="hide-for-tablet"></span>
                                <span className="hide-for-tablet"></span>
                            </li>
                        </ul>
                    </li>
                    <li className='header__uppernav__middle'>
                        <ul>
                            <li>
                                <input type="text" placeholder='Search...'/>
                            </li>
                            <li>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </li>
                        </ul>
                    </li>
                    <li className='header__uppernav__right'>
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fa-solid fa-user"></i>
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav className='header__bottomnav'>
                <ul className='header__bottomnav__list padding__aM'>
                    <li onClick={() => ToggleMenu()}>
                        <ul className='header__menuBtn'>
                            <li>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                            <li>
                                All
                            </li>
                        </ul>
                    </li>
                    <li>
                        Best Sellers
                    </li>
                    <li>
                        New Releases
                    </li>
                    <li>
                        Todays Deals
                    </li>
                    <li>
                        Jewelry
                    </li>
                    <li>
                        Clothing
                    </li>
                    <li>
                        Art
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

import React from 'react'

export default function Sidebar({ ToggleMenu, status }) {
  return (
    <>
        <header className={'sidebar ' + status}>
            <div className={'sidebar__background ' + status} onClick={() => ToggleMenu()}></div>
            <nav className='sidebar__nav'>
                <ul className='sidebar__nav__list'>
                    <li className='sidebar__nav__list__title'>
                        <ul className='padding__s padding__uM'>
                            <li>
                                <a href="#">
                                    <i class="fa-solid fa-user"></i>
                                    Hello, Sign In
                                </a>
                            </li>
                            <li onClick={() => ToggleMenu()}>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </li>
                    <li className='sidebar__nav__list__links padding__uL'>
                        <ul>
                            <li>
                                <div className='hide-for-tablet'>
                                    <ul>
                                        <li>
                                            <input type="text" placeholder='Search...'/>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 className='padding__s padding__uS'>
                                        <div className='padding__uS'>Trending</div>
                                    </h3>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>Best Sellers</div>
                                    </p>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>New Releases</div>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 className='padding__s padding__uS'>
                                        <div className='padding__uS'>Jewelry</div>
                                    </h3>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>Bracelets</div>
                                    </p>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>Rings</div>
                                    </p>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>Necklaces</div>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 className='padding__s padding__uS'>
                                        <div className='padding__uS'>Clothes</div>
                                    </h3>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>T-Shirts</div>
                                    </p>
                                    <p className='padding__s padding__uS hoverable'>
                                        <div>Sweaters</div>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3 className='padding__s padding__uS'>
                                        <div>Account</div>
                                    </h3>
                                    <div className='padding__s padding__uS hoverable'>
                                        <a href="#">Sign In</a>
                                    </div>
                                    <div className='padding__s padding__uS hoverable'>
                                        <p>
                                            <div>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            Cart
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

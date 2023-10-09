'use client';

import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <img src="/your-logo.png" alt="Logo" className="w-20 h-20" />
      <div onClick={toggleCart}>Cart</div>
      <CartDrawer isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default Navbar;

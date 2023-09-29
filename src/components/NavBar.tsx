"use client";

import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setMenuOpen(!isMenuOpen)}>Hamburger</button>
      <div>Logo</div>
      <button onClick={() => setCartOpen(!isCartOpen)}>Cart</button>

      {isMenuOpen && <MenuDrawer close={() => setMenuOpen(false)} />}
      {isCartOpen && <CartDrawer close={() => setCartOpen(false)} />}
    </nav>
  );
}

export default Navbar;

import React, { useEffect } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  toggleCart: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, toggleCart }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const cart = document.getElementById('cart-drawer');
        if (cart && !cart.contains(event.target as Node)) {
          toggleCart();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, toggleCart]);

  return (
    <div
      id="cart-drawer"
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute inset-y-0 right-0 w-1/5 h-full bg-gray-900 text-white`}
    >
      {/* Add cart content here */}
      <button onClick={toggleCart}>Close</button>
    </div>
  );
};

export default CartDrawer;

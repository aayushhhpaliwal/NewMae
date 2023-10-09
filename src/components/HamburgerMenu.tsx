import React, { useEffect } from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const menu = document.getElementById('hamburger-menu');
        if (menu && !menu.contains(event.target as Node)) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div
      id="hamburger-menu"
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute inset-y-0 left-0 w-1/5 h-full bg-gray-900 text-white`}
    >
      {/* Add menu items here */}
      <button onClick={toggleMenu}>Close</button>
    </div>
  );
};

export default HamburgerMenu;

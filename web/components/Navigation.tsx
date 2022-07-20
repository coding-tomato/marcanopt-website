import React, { useState } from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const openModifier = isOpen ? 'navigation__burger-menu-items--open' : '';

  const buttonHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  return <header className='navigation'>
    <p>LOGO</p>

    <div className='navigation__items'>
      <div className={
        `navigation__burger-menu-items ${openModifier}`}
      >
        <Link href="/">
          <a>¿Quién soy?</a>
        </Link>
        <Link href="/">
          <a>Misión</a>
        </Link>
        <Link href="/">
          <a>Contacto</a>
        </Link>
      </div>
      <button
        onClick={buttonHandler}
        className='navigation__burger-menu'
      >
        {isOpen ? 'X' : '☰'}
      </button>
    </div>

  </header>;
};

export default Navigation;

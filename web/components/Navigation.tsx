import React, { useState } from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  return <header className={`navigation navigation--${isOpen ? 'open' : ''}`}>
    <p>LOGO</p>
        <Link href="/">
            <a>¿Quién soy?</a>
        </Link>
        <Link href="/">
            <a>Misión</a>
        </Link>
        <Link href="/">
            <a></a>
        </Link>
        <Link href="/">
            <a>Contacto</a>
        </Link>
        <button onClick={buttonHandler}></button>
    </header>;
};

export default Navigation;

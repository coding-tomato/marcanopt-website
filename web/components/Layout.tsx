import React from 'react';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className='container'>
    <Navigation />
    <div className='page-content'>
      {children}
    </div>
    <h1>Footer test</h1>
  </div>
);

export default Layout;

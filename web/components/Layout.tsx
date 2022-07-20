import React from 'react';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
    <div>
        <Navigation />
        {children}
        <h1>Footer test</h1>
    </div>
);

export default Layout;

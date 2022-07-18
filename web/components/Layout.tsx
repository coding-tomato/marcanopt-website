import React from 'react';

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
    <div>
        <h1>Header test</h1>
        {children}
        <h1>Footer test</h1>
    </div>
);

export default Layout;

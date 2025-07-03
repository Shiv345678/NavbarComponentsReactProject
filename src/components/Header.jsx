import React from 'react';

const Header = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav style={{
        backgroundColor: '#2f2f2f',
        padding: '10px 0',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
      }}>
        <span style={{ margin: '0 20px', cursor: 'pointer' }}>Home</span>
        <span style={{ margin: '0 20px', cursor: 'pointer' }}>About</span>
        <span style={{ margin: '0 20px', cursor: 'pointer' }}>Contact</span>
      </nav>

      {/* Light Blue Header Section */}
      <div style={{
        backgroundColor: '#b3dceb',
        padding: '30px 0',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '28px' }}>This is a Header</h2>
      </div>
    </div>
  );
};

export default Header;

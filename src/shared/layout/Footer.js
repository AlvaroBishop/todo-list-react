import React from 'react';

const Footer = () => {
  
  const root = {
    marginTop: '20px',
    color: '#41EF98'
  }

  return (
    <footer style ={root}>
          &copy; Web2 {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
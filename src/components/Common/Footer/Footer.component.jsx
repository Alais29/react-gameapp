import React from 'react';
import './Footer.styles.scss'

const Footer = () => (
  <footer className="text-center">
    {new Date().getFullYear()} - &copy; Alfonsina Lizardo - 
    Powered by <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">rawg.io</a>
  </footer>
)

export default Footer;

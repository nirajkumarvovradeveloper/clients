import React from "react";

import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer" class="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Dev Connector
    </footer>
  );
};

export default Footer;

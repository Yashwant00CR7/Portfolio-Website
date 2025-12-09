import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-stone-900 text-stone-600 text-center border-t border-stone-800 text-sm">
      <p>&copy; {new Date().getFullYear()} Yashwant K. All rights reserved.</p>
      <p className="mt-2 text-xs">Designed with React, Tailwind & Framer Motion</p>
    </footer>
  );
};

export default Footer;
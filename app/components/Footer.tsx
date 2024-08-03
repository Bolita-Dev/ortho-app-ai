import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto my-6 w-full">
        <hr className="my-6 border-slate-800" />
        <span className="block text-center text-sm text-slate-400">
          2024 Ortho &#x2022;&nbsp;
          <Link
            target="_blank"
            href="https://github.com/Bolita-Dev/orthography-ai"
            className="hover:underline">
            Ver en Github
          </Link>
          &nbsp;&#x2022; v1.0.0
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-[url('https://images.unsplash.com/photo-1637325258040-d2f09636ecf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')] bg-no-repeat bg-cover text-gray-600 text-lg py-2 flex flex-col gap-1 items-center bg-rose-200 opacity-75 ">
      <h2 className="text-2xl font-bold  italic">
        Food<span className="text-orange-500">Land</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Food-Land. All rights reserved.</p>
    </div>
  );
};

export default Footer;

import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow h-16">
      <div className="flex px-6 justify-between ">
        <button>menu</button>
        <a>logo</a>
        <button>theme</button>
        <button>user</button>
      </div>
    </header>
  );
};

export default Navbar;

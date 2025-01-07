import React from "react";

function Navbar({ className, children }) { 
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand/Logo */}
          <h1 className="text-2xl font-bold">Quiztastic</h1>

          {/* Authentication Buttons */}
          <div className={className}> 
            {children} 
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
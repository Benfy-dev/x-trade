import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-brand">
      <div className="container mx-auto">
        <div className="py-4 px-4 xl:px-0">
          <Image
            src="/images/xtrade-logo.png"
            alt="X Trade"
            width={174}
            height={62}
            className="w-36 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

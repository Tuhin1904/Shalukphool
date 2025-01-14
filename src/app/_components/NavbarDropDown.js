import React from "react";

const NavbarDropDown = ({ hoveredItem }) => {
  return (
    <div className="absolute top-full h-64 left-0 w-full bg-white text-gray-700 p-2 shadow-lg z-50 animate__animated animate__fadeIn animate__delay-0.5s animate__fast ">
      <p className="text-center font-bold mb-2 uppercase tracking-wide text-xl tracking-wide">
        {hoveredItem.category}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {hoveredItem.item.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-sm font-medium mb-2">{item.name}</p>
            <div className="grid grid-cols-3 gap-2">
              {item.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${item.name} image ${imgIndex + 1}`}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropDown;

import React from "react";

const HoverImage = ({ defaultSrc, hoverSrc, alt }) => {
  return (
    <div className="relative md:w-[1700px] md:h-[1200px] w-[354px] h-[250px] ">
      {/* Default Image (Visible by Default) */}
      <img
        src={defaultSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full transition-opacity duration-300 hover:opacity-0 object-cover"
      />
      {/* Hover Image (Initially Hidden) */}
      <img
        src={hoverSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
};

const Highlights = () => {
  return (
    <div className="flex justify-center items-center md:h-[900px] h-[150px]">
      <HoverImage
        defaultSrc="/assets/highlight.png"
        hoverSrc="/assets/highlight_hover.png"
        alt="Hover to change"
      />
    </div>
  );
};

export default Highlights;
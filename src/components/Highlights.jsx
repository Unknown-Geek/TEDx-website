import React from "react";

const HoverImage = ({ defaultSrc, hoverSrc, alt }) => {
  return (
    <div className="relative md:w-full md:h-full w-[354px] h-[250px] group">
      {/* Default Image */}
      <img
        src={defaultSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* Hover Image */}
      <img
        src={hoverSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

const Highlights = () => {
  return (
    <div className="flex justify-center items-center md:h-[900px] h-[150px]">
      <div className="md:w-[1700px] md:h-[1200px]">
        <HoverImage
          defaultSrc="/assets/highlight.png"
          hoverSrc="/assets/highlight_hover.png"
          alt="Hover to change"
        />
      </div>
    </div>
  );
};

export default Highlights;
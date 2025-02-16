import React from "react";

const HoverImage = ({ defaultSrc, hoverSrc, alt }) => {
  return (
    <div className="relative w-[1700px] h-[1200px] group">
      {/* Default Image (Visible by Default) */}
      <img
        src={defaultSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
      />
      {/* Hover Image (Initially Hidden) */}
      <img
        src={hoverSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

const HighlightsTitle = () => {
  return (
    <div className="flex justify-center items-center h-[900px]">
      <HoverImage
        defaultSrc="/assets/highlight.png"
        hoverSrc="/assets/highlight_hover.png"
        alt="Hover to change"
      />
    </div>
  );
};

export default HighlightsTitle;
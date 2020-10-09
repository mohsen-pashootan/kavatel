import React from "react";
import "./fancyImage.scss";

export default function FancyImage({ srcLarge, altLarge, srcSmall, altSmall }) {
  return (
    <>
      <img className="img-large" src={srcLarge} alt={altLarge} />
      <img className="img-small" src={srcSmall} alt={altSmall} />
    </>
  );
}

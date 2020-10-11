import React from "react";
import styles from "./fancyImage.module.scss";

export default function FancyImage({ srcLarge, altLarge, srcSmall, altSmall }) {
  return (
    <>
      <img className={styles["img-large"]} src={srcLarge} alt={altLarge} />
      <img className={styles["img-small"]} src={srcSmall} alt={altSmall} />
    </>
  );
}

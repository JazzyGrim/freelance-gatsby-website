import React from "react";
import * as styles from "../styles/home-main.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function DesignGallery() {
  return (
    <>
      <StaticImage
        alt="An apartment website designed by Mateo Sindičić."
        placeholder="blurred"
        className={styles.mainImage}
        src="../images/Group9.png"
      />
      <StaticImage
        alt="A contact form designed by Mateo Sindičić."
        placeholder="blurred"
        className={styles.imageLeft}
        src="../images/Group10.png"
      />
      <StaticImage
        alt="A pop-up notification designed by Mateo Sindičić."
        placeholder="blurred"
        className={styles.imageRightOne}
        src="../images/Group2.png"
      />
      <StaticImage
        alt="A blog post card designed by Mateo Sindičić."
        placeholder="blurred"
        className={styles.imageRightTwo}
        src="../images/Group3.png"
      />
    </>
  );
}

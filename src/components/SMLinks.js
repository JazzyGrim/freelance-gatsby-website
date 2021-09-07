import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function SMLinks() {
  return (
    <>
      <Link to="https://www.github.com/JazzyGrim/">
        <StaticImage src="../images/github.png" />
      </Link>
      <Link to="https://www.linkedin.com/in/mateosindicic">
        <StaticImage src="../images/linkedin.png" />
      </Link>
      <Link to="https://www.facebook.com/mateosindicic">
        <StaticImage src="../images/fb.png" />
      </Link>
      <Link to="https://www.instagram.com/mateosindicic/">
        <StaticImage src="../images/ig.png" />
      </Link>
    </>
  );
}

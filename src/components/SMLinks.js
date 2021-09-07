import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function SMLinks() {
  return (
    <>
      <Link to="https://github.com/JazzyGrim/">
        <StaticImage src="../images/github.png" />
      </Link>
      <Link to="">
        <StaticImage src="../images/linkedin.png" />
      </Link>
      <Link to="">
        <StaticImage src="../images/fb.png" />
      </Link>
      <Link to="">
        <StaticImage src="../images/ig.png" />
      </Link>
    </>
  );
}

import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import "../styles/footer.css";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mateo Sindičić | Freelance Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Professional Web and Mobile developer from Croatia with extensive experience."
        />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Helmet>
      <Navbar />
      {children}
      <footer>
        <h3>Designed & Developed by Mateo Sindičić</h3>
        <h4>Copyright © 2021</h4>
      </footer>
    </>
  );
}

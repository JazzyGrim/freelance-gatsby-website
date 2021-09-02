import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

export default function Layout( { children } ) {
    return <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mateo Sindičić | Freelance Developer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Navbar />
        { children }
        <footer>

        </footer>
    </>
}
import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as styles from "../styles/navigation.module.css";

export default function Navbar( ) {
    return <nav>
        <div>
            <h3>Mateo S.</h3>
            <ul>
                <li onClick={() => scrollTo('main')}>Naslovnica</li>
                <li onClick={() => scrollTo("section[name='about']")}>O Meni</li>
                <li onClick={() => scrollTo("section[name='contact']")}>Kontakt</li>
            </ul>
            <button onClick={() => scrollTo("section[name='contact']")} className={ styles.navButton }>Izradite stranicu</button>
        </div>
    </nav>
}
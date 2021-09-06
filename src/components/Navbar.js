import React, { useEffect, useState } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as styles from "../styles/navigation.module.css";

export default function Navbar( ) {

    const [ navShadow, setNavShadow ] = useState( false );

    useEffect( ( ) => {
        window.addEventListener( "scroll", onScroll );
    }, [ ] );

    const onScroll = ( event ) => {
        if ( window.scrollY > 0 ) setNavShadow( true );
        else setNavShadow( false );
    }

    return <nav className={ navShadow ? styles.navShadow :  '' }>
        <div>
            <h3>Mateo S.</h3>
            <ul>
                <li onClick={() => scrollTo('main')}>Naslovnica</li>
                <li onClick={() => scrollTo("section[name='about']")}>O Meni</li>
                <li onClick={() => scrollTo("section[name='contact']")}>Kontakt</li>
            </ul>
            <button onClick={() => scrollTo("section[name='contact']")} className={ styles.navButton }>Pošaljite upit</button>
        </div>
    </nav>
}
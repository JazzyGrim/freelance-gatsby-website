import React, { useEffect } from "react";
import * as styles from "../styles/skillbar.module.css";

export default function SkillBar( props ) {
    useEffect( ( ) => {
        console.log( "cur props: " + props );
    }, [ ] );

    return <div className={ styles.skillContainer }>
        <h4>{ props.name }</h4>
        <div className={ styles.skillBar }>
        <div className={ styles.skillBarFiller } style={ { width: props.percentage } }>
            <div className={ styles.progressBar } />
        </div>
        </div>
    </div>
}
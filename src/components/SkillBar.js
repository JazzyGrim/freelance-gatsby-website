import React, { useEffect } from "react"
import Reveal from "react-reveal/Reveal"
import * as styles from "../styles/skillbar.module.css"

export default function SkillBar(props) {
  useEffect(() => {
    console.log("cur props: " + props)
  }, [])

  return (
    <div className={styles.skillContainer}>
      <h4>{props.name}</h4>
      <div className={styles.skillBar}>
        <div
          className={styles.skillBarFiller}
          style={{ width: props.percentage }}
        >
          <Reveal effect="progress" delay={1000}>
            <div className={styles.progressBar}>
              <div className={styles.progressHead} />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

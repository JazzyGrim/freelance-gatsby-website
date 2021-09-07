import React from "react";
import * as styles from "../styles/text-container.module.css";

export default function TextContainer(props) {
  const { title, description, titleReveal, descriptionReveal } = props;

  return (
    <>
      <h2 className={styles.text_Title}>
        {titleReveal}
        {title}
      </h2>
      <p className={styles.text_Description}>
        {descriptionReveal}
        {description}
      </p>
    </>
  );
}

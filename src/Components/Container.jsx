import React from "react";
import styles from "./container.module.css";

export default function ({ children }) {
  return <div className={styles.container}>{children}</div>;
}

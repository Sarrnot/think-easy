import React from "react";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <div className={styles.header}>
      <div className='container'>
        <h1>Sentence game</h1>
      </div>
    </div>
  );
}

export default AppHeader;

import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Play from "../../../components/Play";


const Main = ({ scrollToRef, scrollToRefCatalog }) => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>Web3 Economy</h1>
          <div className={styles.info}>Building a player owned economy</div>

        </div>
        <div className={styles.video}>
          <img src="/images/content/summer3.png" alt="Preview" />
          <Play />
        </div>        
      </div>
    </div>

    
  );
};

export default Main;

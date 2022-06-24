import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Player from "../../../components/Player";

const breadcrumbs = [
  {
    title: "Learn crypto",
    url: "/learn-crypto",
  },
  {
    title: "Trading",
    url: "/learn-crypto",
  },
  {
    title: "Bitcoin",
  },
];

const Main = () => {
  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", styles.title)}>
            Why Web3 for my games?
          </h1>
          <Breadcrumbs className={styles.breadcrumbs} items={breadcrumbs} />
        </div>
        <Player
          className={styles.player}
          image="/images/content/summer3.png"
        />
        
      </div>
    </div>
    
  );
};

export default Main;

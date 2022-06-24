import React, { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Form from "../../../components/Form";

const Main = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn("section-mb0", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Start building with Tesseract
          </div>
          <h1 className={cn("h1", styles.title)}>Get in Touch</h1>
          <div className={styles.text}>
            Decentralised Commerce Layer for Digital Experiences
          </div>
          {/* <Form
            className={styles.form}
            value={search}
            setValue={setSearch}
            onSubmit={() => handleSubmit()}
            placeholder="Search anything"
            type="text"
            name="search"
            icon="arrow-next"
          /> */}
        </div>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/abstract.png"
            src="/images/content/abstract.png"
            alt="Cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

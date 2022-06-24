import React, { useRef } from "react";
import Main from "./Main";
// import Releases from "./Releases";
// import Catalog from "./Catalog";
// import News from "../../components/News";
import Article from "./Article";

const LearnCrypto = () => {
  const scrollToRef = useRef(null);
  const scrollToRefCatalog = useRef(null);

  return (
    <>
      <Main scrollToRef={scrollToRef} scrollToRefCatalog={scrollToRefCatalog} />
      {/* <Releases scrollToRef={scrollToRef} />
      <Catalog scrollToRefCatalog={scrollToRefCatalog} />
      <News classSection="section-bg section-mb0" /> */}
      <Article scrollToRef={scrollToRef} scrollToRefCatalog={scrollToRef} />
    </>
  );
};

export default LearnCrypto;

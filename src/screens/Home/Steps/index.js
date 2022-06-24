import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";

const items = [
  {
    title: "Download",
    image2x: "/images/content/downloadfile.png",
    image: "/images/content/downloadfile.png",
    content:
      "Download the Tesseract SDK & toolbox",
  },
  {
    title: "Connect",
    image2x: "/images/content/cube.png",
    image: "/images/content/cube.png",
    content:
      "Integrate natively into your game",
  },
  {
    title: "Customise",
    image2x: "/images/content/color.png",
    image: "/images/content/color.png",
    content:
      "Customize the in-game NFTs & tokenomics",
  },
  {
    title: "Publish",
    image2x: "/images/content/computer.png",
    image: "/images/content/xomputer.png",
    content:
      "Publish your game on Web, Andriod or iOS",
  },
];

const Steps = ({ scrollToRef }) => {
  return (
		<div className={cn('section', styles.section)} ref={scrollToRef}>
			<div className={cn('container', styles.container)}>
				<div className={styles.head}>
					<h2 className={cn('h2', styles.title)}>How does it work?</h2>
					<div className={styles.info}>
						The Tesseract Platform provides end-to-end tooling to incorporate decentralised commerce in your product. 
					</div>
				</div>
				<div className={styles.list}>
					{items.map((x, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.preview}>
								<img
									srcSet={`${x.image2x} 2x`}
									src={x.image}
									alt={`Step ${index + 1}`}
								/>
							</div>
							<div className={styles.number}>Step {index + 1}</div>
							<div className={styles.subtitle}>{x.title}</div>
							<div className={styles.content}>{x.content}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};

export default Steps;

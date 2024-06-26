import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";

const Hero = ({ scrollToRef }) => {
	return (
		<div className={cn('section', styles.main)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.wrap}>
					<h2 className={cn('h2', styles.title)}>
						Decentralised Infrastructure for<br></br>Digital Experiences
					</h2>
					<div className={styles.text}>
						Bring True Ownership Of Virtual Assets, Verifiable Scarcity, And
						Open Standard For Interoperability To Your Digital Experience
					</div>
					<Link className={cn('button', styles.button)} to='/learn-crypto'>
						Early Access
					</Link>
					<ScrollButton
						onScroll={() =>
							scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
						}
						className={styles.scroll}
					/>
				</div>
				<div className={styles.bg}>
					<img
						srcSet='/images/content/console.png 2x'
						src='/images/content/console.png'
						alt='Cards'
					/>
				</div>
				<Cards className={styles.cards} />
			</div>
		</div>
	)
}

export default Hero

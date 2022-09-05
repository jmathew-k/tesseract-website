import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Download.module.sass";

const items = [
	{
		title: 'Tesseract Core SDK',
		content: 'Download',
		image: '/images/content/cloud-download.png',
		url: '/',
	},
	// {
	// 	title: 'Andriod SDK',
	// 	content: 'Coming Soon',
	// 	image: '/images/content/andriod.png',
	// 	url: '/',
	// },
	// {
	// 	title: 'Web SDK',
	// 	content: 'Coming Soon',
	// 	image: '/images/content/ios.png',
	// 	url: '/',
	// },
]

const Download = () => {
	return (
		<div className={cn('section-mb0', styles.download)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.bg}>
					<img
						srcSet='/images/content/metakid.png'
						src='/images/content/metakid.png'
						alt='Download'
					/>
				</div>
				<div className={styles.wrap}>
					<h2 className={cn('h2', styles.title)}>
						Integrate with your Game
					</h2>
					<div className={styles.info}>
						Integrate blockchain based ownership for virtual assets directly into your
						game experience
					</div>
					<div className={styles.list}>
						{items.map((x, index) => (
							<Link className={styles.item} key={index} to={x.url}>
								<div className={styles.icon}>
									<img src={x.image} alt='Logo' />
								</div>
								<div className={styles.details}>
									<div className={styles.content}>{x.content}</div>
									<div className={styles.subtitle}>{x.title}</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Download;

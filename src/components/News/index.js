import React from "react";
import cn from "classnames";
import styles from "./News.module.sass";
import Image from "../Image";
import Slider from "react-slick";
import Icon from "../Icon";
import Card from "./Card";

const items = [
	{
		title: 'Integrated Marketplace',
		content:
			'Decentralised NFT/Asset Marketplace to manage trades, payments and asset inventory ',
		stage: 'live',
		image: '/images/content/eth-mint.png',
		image2x: '/images/content/eth-mint.png',
		url: '/learn-crypto-details',
	},
	{
		title: 'NFT/Token Manager',
		content:
			'NFT/Token management gives players true ownership of their digital assets with seamless interoperability with public blockchains',
		stage: 'beta',
		image: '/images/content/mint3.png',
		image2x: '/images/content/mint3.png',
		url: '/learn-crypto-details',
	},
	{
		title: 'Game Service Suite',
		content:
			'Integrate authentication, player data storage & identity, inventory management with our SDK',
		stage: 'alpha',
		image: '/images/content/mint2.png',
		image2x: '/images/content/mint2.png',
		url: '/learn-crypto-details',
	},
]

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
	<button {...props}>{children}</button>
)

const News = ({ classSection }) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: (
			<SlickArrow>
				<Icon name='arrow-next' size='18' />
			</SlickArrow>
		),
		prevArrow: (
			<SlickArrow>
				<Icon name='arrow-prev' size='18' />
			</SlickArrow>
		),
	}

	return (
		<div className={cn(classSection, styles.section)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.head}>
					{/* <div className={styles.logo}>
            <Image
              className={styles.pic}
              src="/images/logo.png"
              srcDark="/images/logo.png"
              alt="tesseract"
            />
          </div> */}
					<h2 className={cn('h2', styles.title)}>
						Tesseract Web3 Stack
					</h2>
					{/* <div className={styles.info}>
            A creative agency that lead and inspire
          </div> */}
				</div>
				<div className={styles.wrapper}>
					<Slider className='news-slider' {...settings}>
						{items.map((x, index) => (
							<Card className={styles.card} item={x} key={index} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default News;

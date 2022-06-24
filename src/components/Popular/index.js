import React from "react";
import cn from "classnames";
import styles from "./Popular.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import Card from "./Card";

const items = [
	{
		title: 'NFT/Token Toolbox',
		content:
			'NFT and token management system enables your players to truly own their digital asset',
		button: 'Learn More',
		image: '/images/content/tools.png',
		image2x: '/images/content/tools.png',
		url: '/buy-crypto',
	},
	{
		title: 'Built-in Integration',
		content:
			'Connect and deploy in-game assets to public blockchains without having to manage it yourself.',
		button: 'Learn More',
		image: '/images/content/puzzle.png',
		image2x: '/images/content/puzzle.png',
		url: '/exchange',
	},
	{
		title: 'Web3 Game Services',
		content:
			'Integrate game services like authentication, inventory management, player data & identity.',
		button: 'Learn More',
		image: '/images/content/moneybag.png',
		image2x: '/images/content/moneybag.png',
		url: '/learn-crypto',
	},
]

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Popular = ({ classSection }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="18" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="18" />
            </SlickArrow>
          ),
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: false,
          nextArrow: (
            <SlickArrow>
              <Icon name="arrow-next" size="18" />
            </SlickArrow>
          ),
          prevArrow: (
            <SlickArrow>
              <Icon name="arrow-prev" size="18" />
            </SlickArrow>
          ),
        },
      },
    ],
  };

  return (
    <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>
            Build Your Next Project On Tesseract
          </h2>
          <div className={styles.info}>
            Tesseract equips everything you need to start building on Web3
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
          </Slider>
        </div>
        <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;

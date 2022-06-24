import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Cards.module.sass";

const items = [
	{
		title: 'AURY/USD',
		price: '2.23',
		money: 'Aurory',
		negative: '-3.46%',
		image: 'images/content/currency/aurory.png',
		url: '/exchange',
	},
	{
		title: 'MANA/USD',
		price: '0.91',
		money: 'Decentraland',
		negative: '-8.36%',
		image: 'images/content/currency/mana.svg',
		url: '/exchange',
	},
	{
		title: 'SAND/USD',
		price: '1.06',
		money: 'The Sandbox',
		negative: '-7.40%',
		image: 'images/content/currency/sandbox.svg',
		url: '/exchange',
	},
	{
		title: 'ILV/USD',
		price: '162.73',
		money: 'Illuvium',
		negative: '-3.94%',
		image: 'images/content/currency/illuvium.png',
		url: '/exchange',
	},
]

const Cards = ({ className }) => {
  return (
    <div className={cn(className, styles.cards)}>
      {items.map((x, index) => (
        <Link className={styles.card} key={index} to={x.url}>
          <div className={styles.icon}>
            <img src={x.image} alt="Currency" />
          </div>
          <div className={styles.details}>
            <div className={styles.line}>
              <div className={styles.title}>{x.title}</div>
              {x.positive && (
                <div className={styles.positive}>{x.positive}</div>
              )}
              {x.negative && (
                <div className={styles.negative}>{x.negative}</div>
              )}
            </div>
            <div className={styles.price}>{x.price}</div>
            <div className={styles.money}>{x.money}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;

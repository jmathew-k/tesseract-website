import React, { useState } from "react";
import cn from "classnames";
import styles from "./Trend.module.sass";
import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const navigation = [
  "All",
  "Indie",
  "Open world",
  "Arcade",
  "Strategy"
];

const items = [
	{
		title: 'DeFi Kingdoms',
		currency: '',
		chain: 'ONE',
		positive: '+2.04%',
		image: '/images/content/currency/defi-kingdoms.png',
		url: '/',
	},
	{
		title: 'Splinterlands',
		currency: '',
		chain: 'HIVE',
		negative: '-0.74%',
		image: '/images/content/currency/splinterlands.png',
		url: '/',
	},
	{
		title: 'Jelly Squish',
		currency: '',
		chain: 'TT',
		positive: '+1.20%',
		image: '/images/content/currency/jelly-squish.png',
		url: '/',
	},
	{
		title: 'Guild of Guardians',
		currency: '',
		chain: 'IMX',
		positive: '+1.71%',
		image: '/images/content/currency/guildofguardians.png',
		url: '/',
	},
	{
		title: 'StepN',
		currency: '',
		chain: 'SOL',
		negative: '-3.84%',
		image: '/images/content/currency/stepn.png',
		url: '/',
	},
]

const data = [
  {
    name: "1",
    price: 1000,
  },
  {
    name: "2",
    price: 2300,
  },
  {
    name: "3",
    price: 2000,
  },
  {
    name: "4",
    price: 2780,
  },
  {
    name: "5",
    price: 1890,
  },
  {
    name: "6",
    price: 2390,
  },
  {
    name: "7",
    price: 2490,
  },
  {
    name: "8",
    price: 3000,
  },
  {
    name: "9",
    price: 2500,
  },
  {
    name: "10",
    price: 2000,
  },
  {
    name: "11",
    price: 2780,
  },
  {
    name: "12",
    price: 1890,
  },
  {
    name: "13",
    price: 2390,
  },
  {
    name: "14",
    price: 1490,
  },
];

const Learn = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sorting, setSorting] = useState(navigation[0]);

  return (
		<div className={cn('section', styles.section)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.line}>
					<h2 className={cn('h2', styles.title)}>Trending Games</h2>
					<Link className={cn('button-stroke', styles.button)} to='/market'>
						View more
					</Link>
				</div>
				<div className={styles.nav}>
					{navigation.map((x, index) => (
						<button
							className={cn(styles.link, {
								[styles.active]: index === activeIndex,
							})}
							onClick={() => setActiveIndex(index)}
							key={index}
						>
							{x}
						</button>
					))}
				</div>
				<div className={styles.dropdown}>
					<Dropdown
						className={styles.dropdown}
						value={sorting}
						setValue={setSorting}
						options={navigation}
					/>
				</div>
				<div className={styles.table}>
					<div className={styles.row}>
						<div className={styles.col}>#</div>
						<div className={styles.col}>Name</div>
						<div className={styles.col}>Chain</div>
						<div className={styles.col}>24h change</div>
						<div className={styles.col}>Activity</div>
						{/* <div className={styles.col}>Website</div> */}
					</div>
					{items.map((x, index) => (
						<Link className={styles.row} to={x.url} key={index}>
							<div className={styles.col}>{index + 1}</div>
							<div className={styles.col}>
								<div className={styles.item}>
									<div className={styles.icon}>
										<img src={x.image} alt='Currency' />
									</div>
									<div className={styles.details}>
										<span className={styles.subtitle}>{x.title}</span>
										<span className={styles.currency}>{x.currency}</span>
									</div>
								</div>
							</div>
							<div className={styles.col}>{x.chain}</div>
							<div className={styles.col}>
								{x.positive && (
									<div className={styles.positive}>{x.positive}</div>
								)}
								{x.negative && (
									<div className={styles.negative}>{x.negative}</div>
								)}
							</div>
							<div className={styles.col}>
								<div className={styles.chart}>
									<ResponsiveContainer width='100%' height='100%'>
										<AreaChart
											width={500}
											height={400}
											data={data}
											margin={{
												top: 0,
												right: 0,
												left: 0,
												bottom: 0,
											}}
										>
											<defs>
												<linearGradient
													id='colorPrice'
													x1='0'
													y1='0'
													x2='0'
													y2='1'
												>
													<stop
														offset='5%'
														stopColor='#45B36B'
														stopOpacity={0.6}
													/>
													<stop
														offset='95%'
														stopColor='#45B36B'
														stopOpacity={0}
													/>
												</linearGradient>
											</defs>
											<Area
												type='monotone'
												dataKey='price'
												stroke='#58BD7D'
												fillOpacity={1}
												fill='url(#colorPrice)'
											/>
										</AreaChart>
									</ResponsiveContainer>
								</div>
							</div>
							{/* <div className={styles.col}>
                <button
                  className={cn("button-stroke button-small", styles.button)}
                >
                  Visit
                </button>
              </div> */}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
};

export default Learn;

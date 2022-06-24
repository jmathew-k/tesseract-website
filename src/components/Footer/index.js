import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
	{
		title: 'Games',
		url: '/buy-crypto',
	},
	{
		title: 'Platform',
		url: '/exchange',
	},

	{
		title: 'Marketplace',
		url: '/market',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
]

const socials = [
	{
		title: 'facebook',
		size: '16',
		url: 'https://www.facebook.com/tesseractxyz/',
	},
	{
		title: 'twitter',
		size: '18',
		url: 'https://twitter.com/tesseract_xyz',
	},
	{
		title: 'linkedin',
		size: '16',
		url: 'https://www.linkedin.com/company/tesseractxyz/',
	},
]

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
		<footer className={styles.footer}>
			<div className={styles.body}>
				<div className={cn('container', styles.container)}>
					<div className={styles.col}>
						<Link className={styles.logo} to='/'>
							<img
								className={styles.picDesktop}
								src='images/logo.png'
								alt='tesseract'
							/>
							<Image
								className={styles.picMobile}
								src='/images/logo.png'
								srcDark='/images/logo.png'
								alt='tesseract'
							/>
						</Link>
						<div className={cn(styles.item, { [styles.active]: visible })}>
							<div
								className={styles.category}
								onClick={() => setVisible(!visible)}
							>
								Links
								<Icon name='arrow-down' size='24' />
							</div>
							<div className={styles.menu}>
								{menu.map((x, index) => (
									<NavLink
										className={styles.link}
										activeClassName={styles.active}
										to={x.url}
										key={index}
									>
										{x.title}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.category}>contact</div>
						<div className={styles.info}>
							<p>Prestige Atlanta,</p>
							<p>Wework Koramangala,</p>
							<p>Bangalore India</p>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.category}>newsletter</div>
						<div className={styles.info}>Subscribe to the newsletter</div>
						<Form
							className={styles.form}
							value={email}
							setValue={setEmail}
							onSubmit={() => handleSubmit()}
							placeholder='Enter your email'
							type='email'
							name='email'
							icon='arrow-next'
						/>
					</div>
				</div>
			</div>
			<div className={styles.foot}>
				<div className={cn('container', styles.container)}>
					<div className={styles.copyright}>
						Copyright © 2022 Tesseract XYZ. All rights reserved
					</div>
					<div className={styles.socials}>
						{socials.map((x, index) => (
							<a
								className={styles.social}
								href={x.url}
								target='_blank'
								rel='noopener noreferrer'
								key={index}
							>
								<Icon name={x.title} size={x.size} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;

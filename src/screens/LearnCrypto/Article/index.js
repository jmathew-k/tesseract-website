import React from 'react'
import cn from 'classnames'
import styles from './Article.module.sass'
import Share from '../../../components/Share'
import Favorite from '../../../components/Favorite'

const Article = () => {
	return (
		<div className={cn('section', styles.main)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.content}>
					<h3>Future of Digital Ownership</h3>
					<p>
						We believe we are at the forefront of a new technological wave, and
						blockchain gaming will be even bigger than all the shifts we’ve seen
						before. Forte’s mission is to prepare all game developers, big and
						small — whether you already have a AAA title with millions of
						players or you are building a blockchain game from the ground up —
						to be successful in this new landscape.
					</p>
					<p>
						Forte’s platform allows game publishers to easily integrate
						blockchain technologies into their games, enabling features such as
						seamless, embeddable token wallets, non-fungible token (NFT) minting
						and selling, payment rails, and other services built specifically
						for blockchain token economies and the management of digital and
						virtual assets. In blockchain-enabled games, players can truly own
						goods, rather than making pure entertainment expenditures. Players
						around the world can freely trade goods and services with each
						other, and can participate in community economies that reward
						creativity, collaboration, and skill. These new systems provide game
						players and communities all around the world with new creative and
						economic opportunities.
					</p>
					<p>
						Publishers can grow their businesses with new, innovative technical
						solutions, and business models. Players are now able to truly own
						their in-app purchases and virtual goods. This is a win for the
						entire ecosystem.
					</p>
				</div>
				<br />
				<br />
				<div className={styles.btns}>
					<button
						onClick="location.href='/'"
						className={cn('button', styles.button)}
					>
						Get In touch
					</button>
				</div>
				{/* <div className={styles.actions}>
					<Share openUp />
					<Favorite className={styles.favorite} />
				</div> */}
			</div>
		</div>
	)
}

export default Article

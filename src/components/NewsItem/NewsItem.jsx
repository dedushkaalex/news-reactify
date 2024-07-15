import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'

import styles from './NewsItem.module.css'

export const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
				<div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}} />
				<div className={styles.text}>
					<h2 className={styles.title}>{item.title}</h2>
					<p className={styles.extra}>
						{`${formatTimeAgo(item.published)} by ${item.author}`}
					</p>
				</div>
		</li>
	)
}

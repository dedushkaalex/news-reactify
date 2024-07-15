import { formatTimeAgo } from '../../helpers/formatTimeAgo.js'
import { Image } from '../Image/Image.jsx'

import styles from './NewsBanner.module.css'

export const NewsBanner = ({ item }) => {
	console.log(item)
	return (
		<article className={styles.banner}>
			<Image image={item?.image}/>
			<h2 className={styles.title}>{item.title}</h2>
			<p className={styles.extra}>
				{`${formatTimeAgo(item.published)} by ${item.author}`}
			</p>
		</article>
	)
}

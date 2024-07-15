import { NewsItem } from '../NewsItem/NewsItem.jsx'
import styles from './NewsList.module.css'

export const NewsList = ({ news }) => {

	return (
		<ul className={styles.list}>
			{
				news.map((newsItem) => (
					<NewsItem item={newsItem} key={newsItem.id} />
				))
			}
		</ul>
	)
}

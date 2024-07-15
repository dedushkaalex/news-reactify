import { formatDate } from '../../helpers/formatDate.js'

import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<h1 className={styles.title}>News Reactify</h1>
			<p className={styles.date}>{formatDate(Date.now())}</p>
		</header>
	)
}

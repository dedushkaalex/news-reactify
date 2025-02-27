import styles from './Skeleton.module.css';

export const Skeleton = ({ count = 1, type = 'banner' }) => {
	return (
		<>
			{
				count > 1 ? (
					<ul className={styles.list}>
						{
							[...Array(count)].map((_, index) => (
								<li key={index} className={type === 'banner' ? styles.banner : styles.item} />
							))
						}
					</ul>
				) : <li className={type === 'banner' ? styles.banner : styles.item} />
			}
		</>
	)
}

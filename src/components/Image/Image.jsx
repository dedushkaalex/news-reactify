import { useState } from 'react'
import styles from './Image.module.css'

export const Image = ({ image, width = '100%', height = '100%' }) => {
	const [isImageLoading, setImageLoading] = useState(true)
	
	return <div className={styles.wrapper} style={{width}}>
		{image ? <img src={image}
		              alt='news'
		              onLoad={() => setImageLoading(false)}
		              className={`${styles.image} ${isImageLoading ? `${styles.blur}` : `${styles['remove-blur']}`}`}
		/> : null
		
		}
	</div>
}

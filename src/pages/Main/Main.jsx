import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews.js'
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx'
import { NewsList } from '../../components/NewsList/NewsList.jsx'
import styles from './Main.module.css'

export const Main = () => {
	const [news, setNews] = useState([])
	
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (e) {
				console.log(e)
			}
		}
		
		fetchNews()
	}, [])
	
	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[0]} /> : null}
			<NewsList news={news}/>
		</main>
	)
}

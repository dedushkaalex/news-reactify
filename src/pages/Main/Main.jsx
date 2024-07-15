import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews.js'
import { NewsBanner } from '../../components/NewsBanner/NewsBanner.jsx'
import { NewsList } from '../../components/NewsList/NewsList.jsx'
import { Skeleton } from '../../components/Skeleton/Skeleton.jsx'
import styles from './Main.module.css'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true);
				const response = await getNews();
				setNews(response.news);
				setIsLoading(false);
			} catch (e) {
				console.log(e);
			} finally {
				setIsLoading(false);
			}
		}
		
		fetchNews()
	}, [])
	
	return (<main className={styles.main}>
		{news.length > 0 && !isLoading ? (
			<NewsBanner item={news[0]} />
		) : (
			<Skeleton count={1} type={'banner'} />
		)
		}
		{
			!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />
		}
	</main>)
}

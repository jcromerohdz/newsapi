import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const NewsContext = createContext()

const NewsProvider = ({children}) => {
	const [category, setCategory] = useState('general')
	const [news, setNews] = useState([])
	const [page, setPage] = useState(1)
	const [newsTotal, setNewsTotal] = useState(0)

	useEffect(() => {

		const queryAPI = async () => {
			const newsURL = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

			const { data } = await axios(newsURL)
			setNews(data.articles)
			setNewsTotal(data.totalResults)
			setPage(1)
		}
		queryAPI()

	}, [category])

	useEffect(() => {

		const queryAPI = async () => {
			const newsURL = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

			const { data } = await axios(newsURL)
			setNews(data.articles)
			setNewsTotal(data.totalResults)
		}
		queryAPI()

	}, [page])

	const handleChangeCategory = (e) => {
		setCategory(e.target.value)
	}

	const handlePageChange = (e, value) => {
		setPage(value)

	}

	return(
		<NewsContext.Provider
			value={{
				category,
				handleChangeCategory,
				news,
				newsTotal,
				handlePageChange,
				page

			}}
		>
			{children}

		</NewsContext.Provider>
	)
}

export {
	NewsProvider
}

export default NewsContext
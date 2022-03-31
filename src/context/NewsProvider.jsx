import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const NewsContext = createContext()

const NewsProvider = ({children}) => {
	const [category, setCategory] = useState('general')
	const [news, setNews] = useState([])

	useEffect(() => {

		const queryAPI = async () => {
			const newsURL = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

			const { data } = await axios(newsURL)
			setNews(data.articles)
		}
		queryAPI()

	}, [category])

	const handleChangeCategory = (e) => {
		setCategory(e.target.value)
	}

	return(
		<NewsContext.Provider
			value={{
				category,
				handleChangeCategory,
				news

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
import { Grid, Typography } from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News"

const NewsList = () => {
	const { news } = useNews()

	return (
		<>
			<Typography
				textAlign={'center'}
				marginY={5}
				variant='h3'
				component={'h2'}
			>
				Latest News
			</Typography>
			<Grid
				container
				spacing={2}
			>
				{news.map(notice => (
					<News 
						key={notice.url}
						notice={notice}
					/>
				))}
			</Grid>
		</>
	)
}

export default NewsList
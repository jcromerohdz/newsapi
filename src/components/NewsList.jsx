import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNews from "../hooks/useNews"
import News from "./News"

const NewsList = () => {
	const { news, newsTotal, handlePageChange, page } = useNews()

	const pageTotal = Math.ceil(newsTotal / 20)

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
		  <Stack 
				sx={{
					marginY: 5
				}}
				spacing={2}
				direction={'row'}
				justifyContent='center'
				alignItems='center'
			>
				<Pagination 
					count={pageTotal} 
					variant="outlined" 
					color="primary" 
					onChange= {handlePageChange}
					page={page}
				/>
			</Stack>
		</>
	)
}

export default NewsList
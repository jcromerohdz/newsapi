import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"

const News = ({notice}) => {
	const {urlToImage, url, title, description, source} = notice
	return (
		<Grid item md={6} lg={4}>
			<Card>
				{urlToImage && (
					<CardMedia 
						component="img"
						alt={`News image ${title}`}
						image={urlToImage}
						height={'250'}
					/>
				)}

				<CardContent>
					<Typography variant='body1' color="error">
							{source.name}
					</Typography>
					<Typography variant='h5' component="div" >
							{title}
					</Typography>
					<Typography variant='body2' >
							{description}
					</Typography>
				</CardContent>

				<CardActions>
					<Link
						href={url}
						target="_blank"
						variant='button'
						width={'100%'}
						textAlign={'center'}
						sx={{
							textDecoration: 'none'
						}}
					>
						Read News
					</Link>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default News
import { Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import Form from './components/Form'
import NewsList from './components/NewsList';
import { NewsProvider } from './context/NewsProvider';

function App() {
  return (
		<NewsProvider>
			<Container>
				<header>
					<Typography variant="h3" component="h1" align="center" marginY={5}>
						Find News
					</Typography>
				</header>

				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item  xs={12} md={6} lg={4}>
						<Form />
					</Grid>
				</Grid>
				<NewsList />
			</Container>
		</NewsProvider>
  )
}

export default App

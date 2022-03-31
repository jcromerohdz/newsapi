import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNews from '../hooks/useNews'

const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

const Form = () => {

	const { category, handleChangeCategory } = useNews()

	return (
		<form>
			<FormControl fullWidth >
				<InputLabel>Categorie</InputLabel>
				<Select
					label="Categorie"
					onChange={handleChangeCategory}
					value={category}
				>
					{CATEGORIES.map(category => (
						<MenuItem 
							key={category.value} 
							value={category.value}
						>
							{category.label}
						</MenuItem>
					))}
				</Select>

				<Box sx={{marginTop: 2}}>
					<Button
						fullWidth
						variant='contained'
						color="primary"
					>
						Find News
					</Button>
				</Box>

			</FormControl>
		</form>
	)
}

export default Form
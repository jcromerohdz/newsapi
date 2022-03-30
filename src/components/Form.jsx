import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'

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
	return (
		<form>
			<FormControl fullWidth >
				<InputLabel>Categorie</InputLabel>
				<Select
					label="Categorie"
				>
					{CATEGORIES.map(categorie => (
						<MenuItem 
							key={categorie.value} 
							value={categorie.value}
						>
							{categorie.label}
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
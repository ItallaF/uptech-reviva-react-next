import { Form, FormButtonSearch, FormSearch } from './styledSeacrchForm';

export default function SearchForm() {
	return (
		<Form>
			<FormSearch type="text"
				placeholder="Faça sua busca aqui se já souber o que está procurando" name="search" data-testid="FormSearch" />
			<FormButtonSearch type="submit" data-testid="FormButtonSearch">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor"
					viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
			</FormButtonSearch>
		</Form>
	)
}
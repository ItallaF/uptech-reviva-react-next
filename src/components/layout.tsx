import Header from './header/HeaderIndex/headerIndex';
import Navbar from './navbar/navbar';
import SearchForm from './search_form/searchForm';
import Footer from './footer/footer';


export default function Layout({ children }: any) {

	return (
		<>
			<Header />
			<Navbar />
			<SearchForm />
			<main>{children}</main>
			<Footer />
		</>
	)
}
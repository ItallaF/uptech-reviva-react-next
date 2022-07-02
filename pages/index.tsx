import { ReactElement } from 'react';
import Banner from '../src/components/banner/banner';
import Blog from '../src/components/blog/blog_index';
import Layout from '../src/components/layout';
import ProductList from '../src/components/listProduct/listProduc';
import { useProductContext } from '../src/contexts/productContext';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
	const { listproducts } = useProductContext();
	const productsLauntch = listproducts.filter(product => product.sectionProduct === 1);
	const productsSummer = listproducts.filter(product => product.sectionProduct === 2);

	return (
		<>
			<main>
				<ProductList title='Ultimos Lançamentos' ProductsSection={productsLauntch} />
				<Banner />
				<ProductList title='Coleção Verão 2022' ProductsSection={productsSummer} />
				<Blog />
			</main>
		</>
	)
}

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}

export default Page;
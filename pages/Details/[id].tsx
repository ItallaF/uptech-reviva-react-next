import { NextPageWithLayout } from '../_app';
import Layout from '../../src/components/layout';
import { ReactElement } from 'react';
import { useProductContext } from '../../src/contexts/productContext';
import DetailsProduct from './styled';
import Banner from '../../src/components/banner/banner';
import ProductList from '../../src/components/listProduct/listProduc';
import ImageProductDetais from '../../src/components/detailsProduct/detailsProductImage.tsx/detailsProductImage';
import ProductContent from '../../src/components/detailsProduct/productContent/productConten';



const PageDetails: NextPageWithLayout = () => {
    const { listproducts } = useProductContext();
    const productsSummer = listproducts.filter(item => item.sectionProduct === 2);

    return (
        <>
            <DetailsProduct>
                <ImageProductDetais />
                <ProductContent />
            </DetailsProduct>
            <Banner />
            <ProductList title='Quem comprou camiseta Reviva K22, também levou um desses para casa!' ProductsSection={productsSummer} />
        </>
    );
}

PageDetails.getLayout = function getLayout(PageDetails: ReactElement) {
    return (
        <Layout>
            {PageDetails}
        </Layout>
    )
}

export default PageDetails;

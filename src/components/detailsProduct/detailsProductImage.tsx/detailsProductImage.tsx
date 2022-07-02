import { useProductContext } from '../../../contexts/productContext';
import { ProductStock } from '../../types/types';
import { ImageProduct } from './styles/styledImageProduct';
import ImageDetails from './styles/styledProductImage';
import { useRouter } from 'next/router';

export default function ImageProductDetais() {
	const router = useRouter();
	const { listproducts } = useProductContext();
	const param = router.query.id;
	const products: ProductStock[] | any = listproducts.find(item => item.id === Number(param));


	return (
		<ImageDetails>
			<ImageProduct src={products.images[0].url} alt={products.images[0].description} />
		</ImageDetails>
	);
}
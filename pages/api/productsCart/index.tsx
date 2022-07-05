import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart } from '../../../src/datas/cart';

const handlerCart = (request: NextApiRequest, response: NextApiResponse) => {
    try {
        const { method } = request;

        switch (method) {
            case 'POST':
                const id = request.body.id;
                const nameProduct = request.body.nameProduct;
                const url = request.body.url;
                const price = request.body.price;
                const description = request.body.description;
                const sizesAvailable = request.body.sizesAvailable;
                const quantityAvailable = request.body.quantityAvailable;
                const sectionProduct = request.body.sectionProduct;
                const images = request.body.images;
                const newProduct = {
                    id,
                    nameProduct,
                    url,
                    price,
                    description,
                    sizesAvailable,
                    quantityAvailable,
                    sectionProduct,
                    images
                }
                Cart.push(newProduct);                
                break;
            default:
                response.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err) {
        response.status(500).json({ statusCode: 500, message: "message " });
    }
};

export default handlerCart;
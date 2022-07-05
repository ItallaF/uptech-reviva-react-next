import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart } from '../../../src/datas/cart';
import { listProduct } from '../../../src/datas/date';

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;

  if (method === "GET") {
    console.log(listProduct)
    return response.status(200).json(listProduct);
  }

  if (method === "POST") {
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
    Cart.push(newProduct)
    //.response.status(201).json(newProduct);
    return response.status(200).json(Cart);
  }
};

export default handler;
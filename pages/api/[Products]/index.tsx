import type { NextApiRequest, NextApiResponse } from 'next'
import { listProduct } from '../../../src/datas/date';

const handler = (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const { method } = request;
  
      switch (method) {
        case 'GET':
          response.status(200).json(listProduct);
          break;
        default:
          response.setHeader('Allow', ['GET', 'PUT']);
          response.status(405).end(`Method ${method} Not Allowed`);
      }
    } catch (err) {
      response.status(500).json({ statusCode: 500, message: "message "});
    }
  };
  
  export default handler;
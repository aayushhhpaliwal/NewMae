import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const SHOPIFY_STORE_URL = 'https://YOUR_SHOPIFY_STORE_URL_HERE.myshopify.com';
  const SHOPIFY_ACCESS_TOKEN = 'YOUR_SHOPIFY_ACCESS_TOKEN_HERE';

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${SHOPIFY_STORE_URL}/admin/api/2022-01/products.json`, {
        headers: {
          'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
          'Content-Type': 'application/json',
        },
      });

      const products = response.data.products;
      return res.status(200).json(products);

    } catch (error) {
      return res.status(error.response?.status || 500).json(error.response?.data || {});
    }
  } else {
    // Handle other request methods if needed
    return res.status(405).end(); // Method Not Allowed for unsupported methods
  }
}

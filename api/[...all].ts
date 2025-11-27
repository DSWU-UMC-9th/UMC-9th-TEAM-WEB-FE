import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const TARGET = process.env.BACKEND_URL as string;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const path = req.url?.replace('/api', '') || '';
  const url = TARGET + path;

  try {
    const response = await axios({
      method: req.method,
      url,
      data: req.body,
      params: req.query,
      headers: {
        ...req.headers,
        host: undefined,
      },
      validateStatus: () => true,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ message: 'Proxy failed' });
  }
}

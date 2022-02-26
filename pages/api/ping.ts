import type { NextApiRequest, NextApiResponse } from 'next';

// noinspection JSUnusedGlobalSymbols
export default (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {
    res.status(200).json({ result: 'Pong' });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  value: string
}

// noinspection JSUnusedGlobalSymbols
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ value: 'API' });
}
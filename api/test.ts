import { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
	res.send({ ok: 'Ok' }).status(200);
}

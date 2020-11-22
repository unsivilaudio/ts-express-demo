import express, { Request, Response } from 'express';

const router = express();

router.get('/', (req: Request, res: Response) => {
    res.render('landing');
});

export default router;

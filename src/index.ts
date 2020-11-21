import path from 'path';
import * as ejs from 'ejs';
import express, { Request, Response } from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.ejs', ejs.renderFile);

app.get('/', (req: Request, res: Response) => {
    res.render('landing');
});

app.listen(3000, () => {
    console.log('[Server] Listening on port 3000');
});

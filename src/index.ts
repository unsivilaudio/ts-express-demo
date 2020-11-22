import path from 'path';
import * as ejs from 'ejs';
import express from 'express';

import rootRoutes from './routes/rootRoutes';

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.ejs', ejs.renderFile);

app.use('/', rootRoutes);

app.listen(3000, () => {
    console.log('[Server] Listening on port 3000');
});

"use strict";

import express from 'express';
import setRoutes from './routes';

const app = express();

app.set('port', 8080);

app.use(express.static('public/style'));

setRoutes(app);

app.listen(app.get('port'));
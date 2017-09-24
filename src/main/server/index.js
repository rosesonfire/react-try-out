"use strict";

import express from 'express';
import setRoutes from './routes'

const app = express();

app.set('port', 8080);

setRoutes(app);

app.listen(app.get('port'));
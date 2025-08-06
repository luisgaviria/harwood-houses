import express from 'express';
import compression from 'compression';
import * as handlerModule from './build/handler.js';

const handler = handlerModule.default ?? handlerModule.handler ?? handlerModule;

const app = express();

app.use(compression());

app.use('/client', express.static('build/client', { maxAge: '1d' }));

app.use((req, res, next) => {
  try {
    const maybe = handler(req, res);
    if (maybe && typeof maybe.then === 'function') maybe.catch(next);
  } catch (err) {
    next(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} (compression enabled)`);
});
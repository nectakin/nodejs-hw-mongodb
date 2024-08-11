
import cors from 'cors';
import express from 'express';
import pino from 'pino-http';

import env from './utils/env.js';

import contactsControllers from './controllers/contactsControllers.js';

const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  app.get('/contacts', contactsControllers.getAllContacts);
  app.get('/contacts/:id', contactsControllers.getContact);

  app.use('*', (req, res) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.use((err, req, res) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  const PORT = Number(env('PORT'));

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

export default setupServer;
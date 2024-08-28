import dotenv from 'dotenv';
dotenv.config();  // Завантаження змінних з .env файлу

import { setupServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import  initMongoConnection  from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};

void bootstrap();

// import initMongoConnection from './db/initMongoConnection.js';
// import setupServer from './server.js';

// setupServer();
// initMongoConnection();
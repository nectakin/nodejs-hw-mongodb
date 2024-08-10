
// import { initMongoDB } from './db/initMongoDB.js';
// import { startServer } from './server.js';

// const bootstrap = async () => {
//   await initMongoDB();
//   startServer();
// };

// bootstrap();
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';

setupServer();
initMongoConnection();
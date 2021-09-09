import 'reflect-metadata';
import express from 'express';
import loaders from './loaders';
import config from './config';
import logger from './loaders/logger';

const startServer = async () => {

  const app = express();

  await loaders(app);

  app.listen(config.port, () => {
    logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `)
  }).on('error', err => { 
    logger.error(err);
    process.exit(1);
  });
};
  
startServer();
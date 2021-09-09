
import redis from 'redis';
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import * as typedi from 'typedi';
import config from '@/config';

const connect = async () => {
  useContainer(Container);
  const connection = await createConnection();

  typedi.Container.set('connection', connection);

  const redisClient = redis.createClient({
    host: config.database.redis.host,
    port: config.database.redis.port,
  });
  typedi.Container.set('redisClient', redisClient);

  return {
    connection,
    redisClient,
  };
};

export default connect;
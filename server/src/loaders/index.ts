import { Express } from 'express';
import expressLoader from './express';
// import connect from './connect';
// import entityInjector from './entityInjector';

export default async (app: Express) => {
    expressLoader(app);
    console.info('Express loaded');

//   await connect();
//   console.info('Mysql & Redis connected');

//   entityInjector();
//   console.info('entities injected');
};
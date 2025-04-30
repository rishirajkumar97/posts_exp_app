import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
// import { apiRouter } from './api/routes';
// import { errorHandler } from './middleware/errorHandler';

export const createApp = () => {
  const app = express();
  
  // Global Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  
  // API Routes
//   app.use('/api/v1', apiRouter);
  
  // Error Handling
//   app.use(errorHandler);
  
  return app;
};
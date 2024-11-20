import express, { Application } from 'express';
import env from '@configs/env.config'
import dotenv from 'dotenv';
import v1Router from '@routes/v1/index.route';

dotenv.config();

const app: Application = express();


app.use(express.json({ limit: '50mb' }));

app.use('/api/v1', v1Router);

app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});

export default app;

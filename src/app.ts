import express from 'express';
import cors from 'cors';
import router from './app/routes';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  }),
);

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;

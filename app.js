import 'dotenv/config';
import './utils/db.js';
import express from 'express';
import userRouter from './controllers/userRouter.js';

const port = 5001;
const app = express();

app.use(express.json());
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('welcome to home');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

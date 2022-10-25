import express from 'express';
import routers from './routes/index.js';

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

routers(app);

export default app;
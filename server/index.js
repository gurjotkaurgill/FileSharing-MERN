import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express(); //initialize Express

app.use(cors());
app.use('/', router);

const PORT = 8000; //which port server runs on

DBConnection();

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`)); //start server
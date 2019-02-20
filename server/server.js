import express from 'express';
import dotenv from 'dotenv';
import routers from './routes/route';
import joiErrors from './middlewares/joiErrors';
import db from './db/db';


dotenv.config(); // Sets environment's varibles

const app = express();

db.dbInit();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routers);

// use celebrate middleware to handle joi errors
app.use(joiErrors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;

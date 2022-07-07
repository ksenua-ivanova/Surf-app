require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { v4: uuid } = require('uuid')
const router = require('express').Router()
const axios = require('axios')

const app = express();

const PORT = process.env.PORT ?? 3000;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router
  .route('/')
  .get((req, res) => {
    res.json(list);
  })

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`success`);
});

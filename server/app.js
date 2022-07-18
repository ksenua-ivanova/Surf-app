require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const { v4: uuid } = require('uuid')
const router = require('express').Router()
const axios = require('axios')
const { Area } = require('./db/models')
const { Place } = require('./db/models')
const { Image } = require('./db/models')

const app = express();

const PORT = process.env.PORT ?? 3000;



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router
  .route('/')
  .get(async (req, res) => {
    const area = await Area.findAll({
      row: true,
    })
    res.json(area)
  })
router
  .route('/place')
  .post(async (req, res) => {
    //  console.log(req.body.id); 
    const place = await Place.findAll({
      where: { areaId: req.body.id }
    })
    // console.log(place)
    res.json(place)
  })
router
  .route('/forecast')
  .post(async (req, res) => {
    const place = await Place.findOne({
      where: { id: req.body.id },
      row: true,
    })
    const coordinate = place.coordinate.split(', ').map(el => Number(el))
    const { data } = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinate[0]}&lon=${coordinate[1]}&appid=55fba02e872e154cdcfd23a9fe1eb05a`)
    res.json(data)
  })
router
  .route('/image')
  .post(async (req, res) => {
    const image = await Image.findAll({
      where: { placeId: req.body.id },
      row: true,
    })
    res.json(image)
  })

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`success`);
});

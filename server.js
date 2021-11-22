const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

const fetchWeather = async ({lat, lon}) => {
    const res = await axios(
        `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}`, {
            headers:{
              "X-Yandex-API-Key": "5ccf4d87-f2a7-4b26-ab41-6eed92ddfc54",
            }
        }
    );
    return res.data
} 

app.get('/weather', async (req, res) => {
  const {lat, lon} = req.query;
  console.log({lat, lon })
  if(lat && typeof lat === "string" && lon && typeof lon === 'string' ){
    const data = await fetchWeather({lat, lon });
  res.json(data);
  } else {
    res.status(400).json('Wrong data input');
   
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
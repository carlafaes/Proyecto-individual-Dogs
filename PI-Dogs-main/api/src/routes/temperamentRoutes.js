const router = require('express').Router();
const axios= require('axios');
const {API_KEY}=process.env;
const {Temperament}= require ('../db');


 router.get('/temperament', async (req, res) => {
    try {
        const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?apikey=${API_KEY}`);
        let temperament = temperamentApi.data.map(d => d.temperament ? d.temperament : "no se tiene temperamento");
        let temp2 = temperament.map(d => d.split(', '))
        let settemp = new Set (temp2.flat()) // el set quita los repetidos y el flat los saca del array
        for (el of settemp) {if (el) await Temperament.findOrCreate({
            where: { name: el }})
      }
        temperamentoBd = await Temperament.findAll();
       console.log(temperamentApi)
        res.status(200).json(temperamentoBd);
    } catch (error) {
        res.status(404).send('No se tiene respuesta a su solicitud' + error)
    }
   
  })


module.exports = router;

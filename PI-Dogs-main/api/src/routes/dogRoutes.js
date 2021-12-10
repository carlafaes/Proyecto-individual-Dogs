
const {Router} = require('express');
const router = Router();
//const {getApi, getDbInfo, getAllInfo} = require('../controllers/infoController');
const {reqApi} = require('../controllers/infoController');
const { Dog,Temperament } = require( '../db');

//GET /dogs?name="..."__:
router.get('/dogs', async (req, res)=>{
//     const name= req.query.name;// recibo el nombre por query.
//  //   let totalDogs= await getAllInfo();//espero a la funcion controladora
       let getApi2= await reqApi()
//     if (name){
//         //let nameDogs= await getApi2.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
//         ///nameDogs.length? res.status(200).send(nameDogs): res.status(404).send('Name dog not found');
//     }
//     else{
//         res.status(200).send(getApi2);
//     }
  res.status(200).send(getApi2);
} )










module.exports = router;
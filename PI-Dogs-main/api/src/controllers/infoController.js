// require('dotenv').config();
// const axios= require('axios');
// const server= require('../app')

// const { Dog } = require( '../db');
// const { Temperament } = require( '../db');

// /*------------INFO API------------------------------*/
// const reqApi= async function getApi(){
//   try{
//     const apiInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//     const getInfo=await apiInfo.data.map((e) => {

//   Dog.findOrCreate({
//     where: {
//       id: e.id,
//       name: e.name,
//       height: e.height.metric,
//       weight: e.weight.metric,
//       life_span: e.life_span,
//       image: e.image.url
//    }
//   })
// });
//    return getInfo.data;
//   }
//   catch(error){
//     next(error);
//   }
   
// };





// module.exports= {
//   reqApi,

// }
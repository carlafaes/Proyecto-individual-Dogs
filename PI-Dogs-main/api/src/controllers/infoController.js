require('dotenv').config();
const axios= require('axios');
const {API_KEY}= process.env;
const { Dog } = require( '../db');
const { Temperament } = require( '../db');

/*------------INFO API------------------------------*/
const reqApi= async function getApi(){
    const apiInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
                   apiInfo.data.map((e) => {

      Dog.findOrCreate({
        where: {
          id: e.id,
          name: e.name,
          height: e.height.metric,
          weight: e.weight.metric,
          life_span: e.life_span,
          image: e.image.url,
       }
      })



    // return {
     
    //   id: e.id,
    //   name: e.name,
    //   weight: e.weight.metric,
    //   height: e.height.metric,
    //   breed_group:e.breed_group,
    //   lifeSpan: e.life_span,
    //   img: e.image.url,
    // };
  });
  return apiInfo.data;
};

/*---------------INFO DATABASE------------*/
// module.exports = async function getDbInfo(){
//   return await Dog.findAll({
//     include:{
//       model: Temperament,
//       attributes: ['id','name'],
//       through:{
//         attributes:[],
//       }
//     }
//   })
// }

/*-------------CONCAT INFO---------------*/

// module.exports= async function getAllInfo(){
//   const apiInfo = await getApi();
//   const dbInfo= await getDbInfo();
//   const totalInfo= apiInfo.concat(dbInfo);
//   return totalInfo;
// }

module.exports= {
  reqApi
}
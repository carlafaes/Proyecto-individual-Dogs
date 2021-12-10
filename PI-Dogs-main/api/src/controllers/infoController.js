const axios= require('axios');
const { Dog } = require( '../db');
const { Temperament } = require( '../db');

/*------------INFO API------------------------------*/
module.exports= async function getApi(){
    const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds");
    const breedApi = await apiInfo.data.map((e) => {
    return {
     
      id: e.id,
      name: e.name,
      weight: e.weight.metric,
      height: e.height.metric,
      breed_group:e.breed_group,
      lifeSpan: e.life_span,
      img: e.image.url,
    };
  });
  return breedApi;
};

/*---------------INFO DATABASE------------*/
module.exports = async function getDbInfo(){
  return await Dog.findAll({
    include:{
      model: Temperament,
      attributes: ['id','name'],
      through:[],
    }
  })
}

/*-------------CONCAT INFO---------------*/

module.exports= async function getAllInfo(){
  const apiInfo = await getApi();
  const dbInfo= await getDbInfo();
  const totalInfo= apiInfo.concat(dbInfo);
  return totalInfo;
}
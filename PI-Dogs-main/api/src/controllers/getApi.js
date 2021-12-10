const axios= require('axios');

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

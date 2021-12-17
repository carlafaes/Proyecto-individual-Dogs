const router = require('express').Router();
const axios= require('axios');
const {API_KEY}=process.env;
const {Temperament}= require ('../db');

router.get('/t', async(req,res,next)=>{
    try{
        let arrTemp= [];
        let concatArr= [];
        const reqApi= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const infoApi= reqApi.data.map(data =>{
            return{
                temperament:data.temperament,
            }
        });

        const filtered= infoApi.filter(data => data.temperament !== undefined)
        filtered.map(data=>{
            arrTemp.push(data.temperament.split(','));
            return arrTemp;
        })

        arrTemp.forEach(data => {
            for(var i=0;i< data.length; i++){
                data[i]= data[i].trimStart();
                concatArr.push(data[i]);
            }
        })

        const table={};
        const unique= concatArr.filter((index) =>{
            return table.hasOwnProperty(index) ? false : (table[index] = true);
        })

        unique.sort();

        const apiADb= unique.map((data)=>{
            return Temperament.findOrCreate({
                where:{
                    name:data,
                }
            })
        })

        let showDb= await Temperament.findAll();
        res.status(200).send(showDb);
    }
    catch(err){
        next(err);
    }
})

module.exports = router;

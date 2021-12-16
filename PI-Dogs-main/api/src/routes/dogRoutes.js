require('dotenv').config();
const {Router, application} = require('express');
const router = Router();
const axios= require('axios');
//const server= require('../app')
const {Op} = require('sequelize');
const {API_KEY}= process.env;
//const {getApi, getDbInfo, getAllInfo} = require('../controllers/infoController');
//const {reqApi} = require('../controllers/infoController');
const { Dog,Temperament } = require( '../db');


/*------------INFO API------------------------------*/
const reqApi= async function getApi(){
          
         const reqApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
           // console.log(reqApi)
         const componenteInfo= reqApi.data.map((e) => {
            return {
        //reqApi.data.map((e)=>{
           // Dog.findOrCreate({
              //  where:{
                    id: e.id,
                    name: e.name,
                    height: e.height.metric.split('-'),
                    weight: e.weight.metric.split('-'),
                    life_span: e.life_span,
                    image: e.image.url
                }
               
            });
            return componenteInfo;
    }

    const reqDb= async () =>{
        return await Dog.findAll({
            include:{
                model: Temperament,
                attribute:{
                    include:['name']
                },
                through:{
                    attribute:[]
                }
            }
        });
    }
  
    const reqAllDogs= async()=>{
        const apiReq= await reqApi();
        const dbReq= await reqDb();
        const allReq= await apiReq.concat(dbReq);
        return allReq;
    }
        

    router.get('/', async(req,res,next)=>{
        try{
            const {name}= req.query;
            if(!name){
               const api= await reqApi();
               const db= await reqDb();
               const allInfo= api.concat(db);
               res.status(200).send(allInfo.length ? allInfo : 'Info not found')
            }
            if(name){
                const api= await reqApi();
                const nameQuery=await  api.filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
                const db= await Dog.findAll({
                    include: Temperament,
                    where:{
                        name:{
                            [Op.iLike]: '%' + name + '%'
                        }
                    }
                })
               // res.send('name')
               const allInfo= nameQuery.concat(db);
               res.status(200).send(allInfo.length ? allInfo : 'Info Dog not found');
            }
        }
        catch(err){
            next(err);
        }
    })

    router.post('/', async(req,res,next)=>{
        try{
            let {name,height_min, height_max,weight_min,weight_max,life_span,image,}
        }
    })


        module.exports = router;
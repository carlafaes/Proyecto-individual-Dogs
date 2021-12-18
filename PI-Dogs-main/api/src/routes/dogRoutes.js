require('dotenv').config();
const {Router, application} = require('express');
const router = Router();
const axios= require('axios');
const { Dog,Temperament } = require( '../db');
//const server= require('../app')
const {Op} = require('sequelize');
const {API_KEY}= process.env;
//const {getApi, getDbInfo, getAllInfo} = require('../controllers/infoController');
//const {reqApi} = require('../controllers/infoController');



/*------------INFO API------------------------------*/
const reqApi= async function getApi(){
          
         const reqApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
           // console.log(reqApi)
         const componenteInfo= reqApi.data.map((e) => {// requiere datos de la API thedogapi.com
            return {
        //reqApi.data.map((e)=>{
           // Dog.findOrCreate({
              //  where:{
                    id: e.id,
                    name: e.name,
                    height: e.height.metric.split('-'),
                    weight: e.weight.metric.split('-'),
                    life_span: e.life_span,
                    image: e.image.url,
                    temperament:e.temperament,
                }
               
            });
            return componenteInfo;
    }

    const reqDb= async () =>{
        return await Dog.findAll({
            include:{
                model: Temperament,
                attributes:{
                    include:['name']
                },
                through:{
                    attributes:[]
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

    

    // router.post('/m', async(req,res,next)=>{
    //     try{
    //         var {name,height,weight,life_span,image,temperament,createdInDb}= req.body;
    //         if (!name || !height || !weight){
    //             return res.status(404).send("The name, height and weight are required");
    //         }
    //         else if(JSON.parse(temperament).length > 0){
    //             const createDog= await Dog.create({
    //                 name,
    //                 height,
    //                 weight,
    //                 life_span,
    //                 image,
    //                 createdInDb
    //             })
    //             // var setTemperaments= await createDog.setTemperaments(temperament)

    //             // var db= await Dog.findAll({
    //             //     include: Temperament
    //             // })
    //             // res.json(db)
    //            let dogCreated= await createDog.setTemperaments(temperament);
    //             //infoTemperament=temperament.map(async (e) =>{
    //                 const temperamentDb= await Temperament.findAll({
    //                     where:{
    //                         name : e,
    //                     },
    //                     include:[Dog]
    //                 })
    //                 createDog.addTemperament(temperamentDb)
                
    //              res.status(200).send(dogCreated, "The dog has been successfully created")
    //         }
             
           
    //     }
    //     catch(err){
    //         next(err)
    //     }
    // })

    router.get('/:id', async(req,res,next)=>{
        try{
            const {id}= req.params;
            const allDogs= await reqAllDogs();
            if(typeof id === 'string' && id.length > 8){
                let filter= allDogs.filter(e => e.id == id)
                res.status(200).send(filter);
            }
            else{
                const api= await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
                console.log(api)
                var informationApi= api.data.map(e =>{
                    return{
                        id:e.id,
                        name: e.name,
                        life_span: e.life_span,
                        weight: e.weight.metric,
                        height: e.height.metric,
                        temperament: e.temperament,
                        image: e.image.url
                    }
                })
            }
            const find= informationApi.find(e => e.id === Number(id));
            res.status(200).send(find)
        }
        catch(err){
            next(err);
        }
    })


    router.post("/m", async (req, res) => {
        try{
          const { name, height, weight, life_span, createdInDb, temperaments } = req.body;
          if (!name || !height || !weight)
            return res.status(404).send("The name, height and weight are required");
          const createdDog = await Dog.create({
            name,
            weight,
            height,
            life_span,
            /* temperament, */
            /* createdInDb, */
          });
          let temperamentDb = await Temperament.findAll({
                 where: { name : temperaments }
        });
        dogCreated.addTemperament(temperamentDb)  
        console.log(temperamentDb); 
         // let temperamentDb =await createdDog.setTemperaments(temperament);
          return res.status(200).send("The dog has been successfully created");
        }
      
        catch(err){
          console.log(err)
          res.status(404).json(err)
        }
    })


    // router.post('/m', async (req, res) => {
    //     try{
    //         let {
    //             name,
    //             height,
    //             weight,
    //             life_span,
    //             image,
    //             temperaments,
    //         } = req.body;
    //         let raceCreated = await Dog.create({
    //             name,
    //             height,
    //             weight,
    //             life_span: life_span + ' years',
    //             image,
    //         });
    //         let temperamentDB = await Temperament.findAll({
    //             where: {
    //                 name: temperaments,
    //             }
    //         });
    //         raceCreated.addTemperament(temperamentDB);
    //         res.status(200).send('🐕 Race created successfully 🐶')
    //     }
    //     catch(err){
    //                console.log(err)
    //              res.status(404).json(err)
    //             }
       
    // });
    // router.get('/temperament', async(req,res,next)=>{
    //     let temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds`)
    //     let temperaments = temperamentsApi.data.map(el => el.temperament)
    //      console.log(temperaments); 
    //      const tempEach = temperaments.map(el => {
    //         // for (let i = 0; i < el.length; i++) 
    //         return el
    //     })
    //     tempEach.forEach(el => {
    //         Temperament.findOrCreate({ where: { name: el } }) // las guardo en la base de datos 
    //     })
    //     const allTemperaments = await Temperament.findAll();  // las traigo de la base de datos 
    //     console.log(allTemperaments)
    //     res.send(allTemperaments) // 
        
    //     })
     
        module.exports = router;

        
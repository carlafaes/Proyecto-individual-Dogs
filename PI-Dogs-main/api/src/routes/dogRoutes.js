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

    

    router.post('/m', async(req,res,next)=>{
        try{
            var {name,height,weight,life_span,image,temperament,createdInDb}= req.body;
            if (!name || !height || !weight){
                return res.status(404).send("The name, height and weight are required");
            }
            else{
                const createDog= await Dog.create({
                    name,
                    height,
                    weight,
                    life_span,
                    image,
                    createdInDb
                })
                // var setTemperaments= await createDog.setTemperaments(temperament)

                // var db= await Dog.findAll({
                //     include: Temperament
                // })
                // res.json(db)
               const dogCreated= await createDog.setTemperaments(temperament);
                //infoTemperament=temperament.map(async (e) =>{
                    const temperamentDb= await Temperament.findAll({
                        where:{
                            name : e,
                        },
                        include:[Dog]
                    })
                    createDog.addTemperament(temperamentDb)
                
                 res.status(200).send(dogCreated, "The dog has been successfully created")
            }
             
           
        }
        catch(err){
            next(err)
        }
    })

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


    // router.post("/m", async (req, res) => {
    //     try{
    //       const { name, height, weight, lifeSpan, createdInDb, temperament } = req.body;
    //       if (!name || !height || !weight)
    //         return res.status(404).send("The name, height and weight are required");
    //       const createdDog = await Dog.create({
    //         name,
    //         height,
    //         weight,
    //         lifeSpan,
    //         /* temperament, */
    //         /* createdInDb, */
    //       });
    //       await createdDog.setTemperaments(temperament);
    //       return res.status(200).send("The dog has been successfully created");
    //     }
      
    //     catch(err){
    //       console.log(err)
    //       res.status(404).json(err)
    //     }
    // })

        module.exports = router;

        
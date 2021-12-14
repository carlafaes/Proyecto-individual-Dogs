require('dotenv').config();
const axios= require('axios');
const server= require('../app')
const {Router, application} = require('express');
const router = Router();
const {Op} = require('sequelize');
const {API_KEY}= process.env;
//const {getApi, getDbInfo, getAllInfo} = require('../controllers/infoController');
//const {reqApi} = require('../controllers/infoController');
const { Dog,Temperament } = require( '../db');


/*------------INFO API------------------------------*/
const reqApi= async function getApi(){
          
            const reqApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
           // console.log(reqApi)
             const componenteInfo= await reqApi.data.map((e) => {
        
            return {
                id: e.id,
                name: e.name,
                height: e.height.metric,
                weight: e.weight.metric,
                life_span: e.life_span,
                image: e.image.url
            }
         })
        // console.log(componenteInfo);
         //console.log(reqApi.data);
            return componenteInfo;
    };
  
    /*------INFO DB-----------------------------------*/
    const infoDb= async function getDb(){
        return await Dog.findAll({
            include:{
                model:Temperament,
                attribute:{
                    include: ['name']
                },
                trough:{
                    attribute:[]
                }
            }
        })
        console.log(infoDb);
    }

    const getAllInfo= async function allInfo(){
        const apiDog= await reqApi();
        const dbDog= await infoDb();
        const allInfoDogs= await apiDog.concat(dbDog);
        //console.log(allInfoDogs);
        return allInfoDogs;
    
}

 //   router.get /dogs
// router.get('/dogs', async (req, res,next)=>{
//      const name= req.query.name;// recibo el nombre por query.
// //  //   let totalDogs= await getAllInfo();//espero a la funcion controladora
//        let getApi2= await reqApi()
//    return res.status(200).send(getApi2);
// } )
router.get('/', async (req, res, next) => {
    
    try {
        //res.send(console.log(reqApi))
     const {name} = req.query;
     if(!name){
         const api = await reqApi();
         res.status(200).send(api.length? api.data : 'Api not found')
     }   
     
     if(name) {
        
         const api = await reqApi();
         const nameQuery = await api.filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
         const db = await Dog.findAll({
             include: Temperament,
             where: {
                 name: {
                     [Op.iLike]: '%' + name + '%'
                 }
             }
         })
         const infoTotal = nameQuery.concat(db);
         res.status(200).send(api.length? infoTotal : 'Name dog not found')
          
         
       } 
 
     } catch(err){
            
            next(err);
        }
        
        });


 router.post('/', async(req,res,next)=>{
     try{
         const {id,name,height,weight,life_span,temperament,image}= req.body;

         const createDog= await Dog.create({
             id,
             name,
             height,
             weight,
             life_span,
             image,
         })
         temperament.map(async (e)=>{
             const dbTemperament= await Temperament.findAll({
                where:{
                    name: e
                },
                include:[Dog],
             })
             createDog.addTemperament(dbTemperament);
         })

         res.status(200).send(createDog);
     }
     catch(err){
         next(err);
     }
     
 });
        




        module.exports = router;
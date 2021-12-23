import axios from 'axios';
import {
    GET_DOGS,
    GET_DETAIL,
    GET_TEMPERAMENTS,
    SEARCH_BY_NAME,
    ADD_DOG,
    FILTER_BY_VALUE,
    FILTER_TEMPERAMENT,
    FILTER_CREATED,
    CLEAN_Q,
  } from "./types";

export function getDogs(){
    return async function(dispatch){
        let json= await axios.get('http://localhost:3001/dogs',{

        });
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        });
    };
};

// export function getDetails(id){
//     return async (dispatch)=>{
//         const json=await axios.get(`http://localhost:3001/dogs/${id}`);
//         return dispatch({
//             type: GET_DETAIL,
//             payload: json.data
//         });
//     };
// };

// export function getTemperament(){
//     return async(dispatch)=>{
//         let json=await axios.get('http://localhost:3001/temperament');
//         return dispatch({
//             type:GET_TEMPERAMENTS,
//             payload: json.data
//         });
//     };
// };

// export const searchByName= (name)=>{
//     return async(dispatch)=>{
//         axios.get(`http://localhost:3001/dogs${name}`)
//         .then((data)=> {
//             return dispatch({
//                 type: SEARCH_BY_NAME,
//                 payload: data.data,
//             })
//         })
//     }
// }

// export const addDog=({
//     name,
//     heightMin,
//     heightMax,
//     weightMin,
//     weightMax,
//     yearsMin,
//     yearsMax,
//     temperament,
// }) => {
//     return async(dispatch)=>{
//        const acc= await axios.get('http://localhost:3001/dogs/',{
//             name,
//             height: heightMin + ' - ' + heightMax,
//             weight: weightMin+ ' - ' + weightMax,
//             lifeSpan: yearsMin + ' - ' + yearsMax + 'years',
//             temperament
//         });
//         dispatch({
//             type:ADD_DOG,
//         });
//     };
// };

// export function filterCreated(payload){
//     return{
//         type: FILTER_CREATED,
//         payload,
//     };
// }

// export function filterByTemperament(payload){
//     return{
//         type: FILTER_TEMPERAMENT,
//         payload,
//     };
// }

// export function filterbyValue(payload){
//     return{
//         type: FILTER_BY_VALUE,
//         payload,
//     };
// }

// export function cleanQ(payload){
//     return{
//         type: CLEAN_Q,
//         payload,
//     };
// }
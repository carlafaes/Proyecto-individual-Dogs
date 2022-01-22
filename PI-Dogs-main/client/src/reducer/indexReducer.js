
import {
    GET_DOGS,
    SEARCH_BY_NAME,
    FILTER_BREED,
    FILTER_TEMPERAMENT,
    GET_TEMPERAMENTS,
    GET_DETAIL,
    ORDER_BY,
    ORDER_BY_WEIGHT,
    ADD_DOG
  } from "../actions/types";

const initialState={
    dogs:[],
    all:[],
    filtered:[],
    temperaments:[],
    detail:[]
};

export default function rootReducer(state= initialState,action){ //action(tiene type y payload)
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                all: action.payload,
                filtered:action.payload
            };

      

        case FILTER_TEMPERAMENT:
          const filter = action.payload === 'temperament' ? state.filtered : state.filtered?.filter(data => data.temperament?.includes(action.payload));
          return{
              ...state,
              dogs: filter,
              
          }
           
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments:action.payload
            };
        case SEARCH_BY_NAME:
                return {
                  ...state,
                  dogs: action.payload,
                };
         case FILTER_BREED:
            let filtBreed= state.all;
            // console.log(filtBreed)
            let createdFilter= 
            action.payload === 'allDogs'?
            filtBreed:
            action.payload === 'createdDogs'?
            filtBreed.filter((e) => e.createdInDb) :
            filtBreed.filter((e) =>!e.createdInDb)
            return{
                ...state,
                dogs: createdFilter,

            };
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
            };
        case ORDER_BY:
            let info=state.dogs;
            let sortedArray= action.payload === 'AZ' ? info.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            :info.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1;
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
            return {
              ...state,
              dogs: sortedArray,
            };
        case ORDER_BY_WEIGHT:
            const stateDogs=state.dogs;
            if(action.payload === 'min'){
                 const comparadorWeightAsc = (a, b) => 
                 Number(a.weight[0]) - 
                 Number(b.weight[0]) 
                 stateDogs.sort(comparadorWeightAsc)

            }
            if(action.payload === 'max'){
                const comparadorWeightDsc = (a, b) => 
                Number(b.weight[0]) - 
                Number(a.weight[0]) 
                stateDogs.sort(comparadorWeightDsc)
            }
            return{
                ...state,
               filtered:stateDogs
            }
        case 'ADD_DOG': 
            return {
                ...state,
                 
            }
            
          
      default:
           return state;
       }
     }
    //}
    
 //export default rootReducer;
            

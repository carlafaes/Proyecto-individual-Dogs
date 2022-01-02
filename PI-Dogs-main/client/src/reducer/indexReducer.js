import {
    GET_DOGS,
    FILTER_BY_VALUE,
    SEARCH_BY_NAME,
    FILTER_BREED,
    FILTER_TEMPERAMENT,
    GET_TEMPERAMENTS,
    GET_DETAIL,
    ADD_DOG,
    ORDER_BY,
    ORDER_BY_WEIGHT
    
  } from "../actions/types";

const initialState={
    dogs:[],
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
                filtered:action.payload
            };

        case ADD_DOG:
            return{
                ...state,
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
            let filterBreed= state.dogs;
            let createdFilter= action.payload === 'createDogs'? filterBreed.filter((e)=> e.createdInDb) : filterBreed.filter((e)=> !e.createdInDb);
            return{
                ...state,
                dogs: action.payload === 'allDogs'? filterBreed : createdFilter,

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
            
          
      default:
           return state;
       }
     }
    //}
    
 //export default rootReducer;
            

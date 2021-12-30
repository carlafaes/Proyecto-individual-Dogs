import {
    GET_DOGS,
    FILTER_BY_VALUE,
    SEARCH_BY_NAME,
    FILTER_CREATED,
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
            // const allDogs= state.dogs;
            // const temperamentsFiltered= action.payload === 'all' ? allDogs : allDogs.filter((e)=>
            // e.temperament === action.payload);
            // return{
            //     ...state,
            //     temperaments: temperamentsFiltered,
            // };
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
        //  case FILTER_CREATED:
        //     let backUp= state.backUpDogs;
        //     let createdFilter= action.payload === 'CREATED'? backUp.filter((e)=> e.createdInDb) : backUp.filter((e)=> !e.createdInDb);
        //     return{
        //         ...state,
        //         dogs: action.payload === 'ALL'? state.backUpDogs : createdFilter,

        //     };
        // case GET_DETAIL:
        //     return{
        //         ...state,
        //         detail: action.payload,
        //     };
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
        //case ORDER_BY_WEIGHT:
            // const isNan= state.dogs.filter(data => !isNan(data.weight? data.weight[0]: data.weight_min));
            // const orderWeight= action.payload === 'min'? isNan.sort(function(a,b){
            //     if(parseInt(a.weight? a.weight[0] : a.weight_min)> parseInt(b.weight? b.weight[0] : b.weight_min)){
            //         return 1;
            //     }
            //     if(parseInt(b.weight? b.weight[0]:b.weight_min) > parseInt(a.weight? a.weight[0] : a.weight_min)){
            //         return -1;
            //     }
            //     return 0;
            // }) :
            // isNan.sort(function(a,b){
            //     if(parseInt(a.weight? a.weight[0]: a.weight_min) > parseInt(b.weight? b.weight[0] : b.weight_min)){
            //         return -1;
            //     }
            //     if(parseInt(b.weight? b.weight[0] : b.weight_min) > parseInt(a.weight? a.weight[0] : a.weight_min)){
            //         return 1;
            //     }
            //     return 0;
            // })
            // return{
            //     ...state,
            //     dogs: action.payload === 'weight'? state.filtered : orderWeight
            // }
          
      default:
           return state;
       }
     }
    //}
    
 //export default rootReducer;
            

import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        let json= await axios.get('http://localhost:3001/dogs',{

        });
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        });
    };
};

export function getDetails(id){
    return async (dispatch)=>{
        const json=await axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        });
    };
};

export function getTemperament(){
    return async(dispatch)=>{
        let json=await axios.get('http://localhost:3001/temperament');
        return dispatch({
            type:GET_TEMPERAMENT,
            payload: json.data
        });
    };
};

// export const searchByName= (name)=>{
//     return(dispatch)=>{

//     }
// }
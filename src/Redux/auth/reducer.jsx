import { IS_AUTH } from "./action";

const initState ={
    auth:false
}

export const authReducer = (state=initState , {type, payload}) => {
    switch (type){
        case IS_AUTH:{
            return{
                auth:payload

            }
        }
        default:
            return state
        
    }
}
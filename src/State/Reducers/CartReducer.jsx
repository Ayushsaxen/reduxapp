export default function CartReducer(state=0,action){
    console.log(action);
    if(action.type==="ADD-TO-CART"){
        return state+action.payload
    }
    else if(action.type==="REMOVE-FROM-CART"){
        if(state!==0)
        return state-action.payload
        else
        return state
    }
    else
    return state
} 
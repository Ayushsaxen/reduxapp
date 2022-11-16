export const addToCart =(count)=>{
    return(dispatch)=>{
        dispatch({
            type:"ADD-TO-CART",
            payload:count
        })
    }
}
export const removeFromCart =(count)=>{
    return(dispatch)=>{
        dispatch({
            type:"REMOVE-From-CART",
            payload:count
        })
    }
}


















// export const addToCart = (count)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"ADD-TO-CART",
//             payload:count
//         })
//     }
// }
// export const removeFromCart = (count)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"REMOVE-FROM-CART",
//             payload:count
//         })
//     }
// }
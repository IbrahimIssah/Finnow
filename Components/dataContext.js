import React,{useState,createContext} from 'react'


export const dataContext=createContext();
export const DataProvider=(props)=>{
    const[data,setData]=useState([]);
    const[cartItems,setCartItems]=useState([])
    const[confirm,setConfirm]=useState(false)

    const[product,setProduct]=useState([])
  
    

    return(
        <dataContext.Provider value={{dat:[data,setData],
          product_:[product,setProduct],data_:[data,setData],cart_:[cartItems,setCartItems],
          confirm_:[confirm,setConfirm]}}>
            {props.children}
        </dataContext.Provider>
    )
}
import React from 'react';
import { addToLocalStorageData, removeToCardDb } from '../utilites/localStore';
import './Data.css'
const Data = (props) => {
    // event odhik data pathanor jonno arrow function dia warp korte hoy
 const {name, id , price}=props.handData
   const addToCard = ()=>{
       addToLocalStorageData(id)
   }
   const removeItem =()=>{
       removeToCardDb(id)
   }
//    const addToCardCall = () =>addToCard(id)
    return (
        <div className='product'>
            <h1>product name: {name}</h1>
            <p>product id :{id}</p>
            <p>product price: {price}</p>
            {/* <button onClick={addToCardCall}>add to card</button> */}
            <button onClick={()=>addToCard(id)}>add to card</button>
            <button onClick={()=>removeItem(id)}>remove to card</button>
            
        </div>
    );
};

export default Data;
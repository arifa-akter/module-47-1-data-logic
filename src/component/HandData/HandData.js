import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import './HandData.css'
const HandData = () => {

    const [handMakeData , setHandMakeData] = useState([])
    useEffect(()=>{
        fetch('jsonData.json')
        .then(response =>response.json())
        .then(data=>setHandMakeData(data))
    },[])
    //  const handMakeData =
    //     [
    //         {
    //           "id": "6238040bc649d85c0b8c2791",
    //           "price": 15547,
    //           "name": "Mann Barber"
    //         },
    //         {
    //           "id": "6238040b2c01f3008a98b934",
    //           "price": 8705,
    //           "name": "Keith Tate"
    //         },
    //         {
    //           "id": "6238040bb4142b29c2d0e7f4",
    //           "price": 46431,
    //           "name": "Knox Cunningham"
    //         },
    //         {
    //           "id": "6238040bfb2fdb1e771f8bcf",
    //           "price": 23043,
    //           "name": "Judith Hines"
    //         },
    //         {
    //           "id": "6238040b500caf62a9f6f728",
    //           "price": 17573,
    //           "name": "Beth Lynn"
    //         },
    //         {
    //           "id": "6238040bb3c74e999693c4cc",
    //           "price": 46863,
    //           "name": "Geraldine Frederick"
    //         },
    //         {
    //           "id": "6238040b79011feccf7e7376",
    //           "price": 13381,
    //           "name": "Linda Bentley"
    //         }
    //       ]
     

    // const handMakeData =[
    //     { id:'1', name:'laptop', price:'35000'},
    //     { id:'2', name:'tablet', price:'50000'},
    //     { id:'3', name:'phone', price:'60000'},
    //     { id:'4', name:'eye port', price:'25000'},
    //     { id:'5', name:'earphone', price:'37000'},
    //     { id:'6', name:'watch', price:'39000'},
    // ]
    return (
        <div>
            <h1>laptop data store</h1>
            {
                handMakeData.map(handData =><Data
                key={handData.id}
                handData={handData}
                ></Data>)
            }
        </div>
    );
};

export default HandData;
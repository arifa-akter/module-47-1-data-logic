import React, {  useState } from 'react';
import './Bettary.css'
const Bettary = () => {
    const [count, setCount] = useState(0)
    const increase =()=>{
        if(count>100){
            const charging = count +20
            setCount(charging)
        }
       const totalCharge = count+ 20
       if(totalCharge === 20){
        document.getElementById('fiv-cell').style.background= 'green'
        setCount(totalCharge)
        }
       else if(totalCharge === 40){
        document.getElementById('fourth-cell').style.background = 'green'
        setCount(totalCharge)
        }
       else if(totalCharge === 60){
        document.getElementById('third-cell').style.background = 'green'
        setCount(totalCharge)
        }
       else if(totalCharge === 80){
        document.getElementById('second-cell').style.background = 'green'
        setCount(totalCharge)
        }
       else if(totalCharge === 100){
        document.getElementById('first-cell').style.background = 'green'
        setCount(totalCharge)
        }
        else if(totalCharge >100){
            alert ('your phone have already charge')
            }
     
    
    }

    const decrease =()=>{
        setCount(count>0?count-10:0)
        console.log(count)
        if(count === 0){
         alert('your phone need charge')
        }
        const lessCharge = count-10
        if(lessCharge === 80){
            console.log(lessCharge)
            document.getElementById('first-cell').style.background = 'none'
            setCount(lessCharge)
        }
        else if(lessCharge === 60){
            console.log(lessCharge)
            document.getElementById('second-cell').style.background = 'none'
            setCount(lessCharge)
            }
        else if(lessCharge === 40){
            console.log(lessCharge)
            document.getElementById('third-cell').style.background = 'none'
            setCount(lessCharge)
            }
        else if(lessCharge === 20){
            console.log(lessCharge)
            document.getElementById('fourth-cell').style.background = 'none'
            setCount(lessCharge)
            }

        else if(lessCharge === 0){
            console.log(lessCharge)
            document.getElementById('fiv-cell').style.background = 'red'
            setCount(lessCharge)
            }
        
        
    }
    return (
        <div>
        <div className="main">
        <div className="main-bettary"> 
               <div id="first-cell" className="bettary-cell"></div>
                <div id="second-cell" className="bettary-cell"></div>
                <div id="third-cell" className="bettary-cell"></div>
                <div id="fourth-cell" className="bettary-cell"></div>
                <div id="fiv-cell" className="bettary-cell"></div>
                <div id="icon">
                <i className="fa fa-bolt" aria-hidden="true"></i>   
                </div> 
        </div>
            
        <h2>charge:{count}%</h2>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        </div>
        </div>
    );
};

export default Bettary;
// manage data in local storage 

const addToLocalStorageData = (id) =>{
   let shoppingCard ={} ;
    const shoppingData = localStorage.getItem('shopping-cart')
    if(shoppingData){
        shoppingCard = JSON.parse(shoppingData)
    }
    else{
        shoppingCard = {} 
    }
    const quantity = shoppingCard[id]
    console.log(quantity)
    if(quantity){
        const newQuantity = parseInt(quantity) + 1
        shoppingCard[id] =newQuantity
    }
    else{
     shoppingCard[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCard))
}

const removeToCardDb =(id)=>{
    const shoppingData = localStorage.getItem('shopping-cart')
    const shoppingValue =JSON.parse(shoppingData)
    if(id in shoppingValue){
        delete shoppingValue[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingValue))
        console.log('exist')
    }
    // console.log(shoppingData)
    // console.log('remove', id)
}

export {addToLocalStorageData,
    removeToCardDb
}


// const quantity = localStorage.getItem(id)
// if(quantity){
//     const newQuantity = parseInt(quantity) + 1
//     localStorage.setItem(id, newQuantity)
// }
// else{
//     localStorage.setItem(id,1)  
// }
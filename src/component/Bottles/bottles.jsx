import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bottle";
import "./bottle.css"
import { addToLS, getStorageCrad, removeformlocalstorage } from "../../../public/localStorage";
import Cart from "../Cartver/Cart";


const Bottles = () => {
    const [bottles,setbottles] = useState([])
    const [card,setCard] = useState([])
 
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data=> setbottles(data))
    },[])

    // load card from local storage
    useEffect(()=>{
        if(bottles.length>0){

            const storeCard = getStorageCrad()
            console.log(storeCard,bottles);
            const saveCard = []
            for(const id of  storeCard){
                console.log(id);
                const bottle = bottles.find(bottle =>bottle.id === id)


                if(bottle){
                    saveCard.push(bottle)
                }
        
        }
        console.log('saved card',saveCard);
        setCard(saveCard)

      
        }
        
       
    },[bottles])



    const handleAddToCard = bottle =>{
        const newCard = [...card, bottle ];
        setCard(newCard);
        addToLS(bottle.id)
        
    };
    const handleremovefromcart = id=>{
        // visual cart theke remove kora
        const remainingCart = card.filter(bottle => bottle.id !== id);
        setCard(remainingCart);
        //remove from local storage
        removeformlocalstorage(id)

    }

  


    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            {/* <h3>Card: {card.length}</h3> */}
           <Cart card ={card} handleremovefromcart={handleremovefromcart}></Cart>
           <div  className="bottle-container">
           {
                bottles.map(bottle => <Bottle handleAddToCard={handleAddToCard} key={bottle.id} bottle ={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles
import React from "react";
import { useNavigate } from "react-router-dom";
import caffePic from '../assets/icons/cafe.jpg';

export const Card = ({data}) => {

    
    const nav = useNavigate();
    function ViewCard(){
        nav('/cardView', { state: data });
    }
    return (
        <div className="card" onClick={ViewCard}>
            
            
            <div className=" image ">
                <img src={data.image}/>
            </div>

            <div>
                <h1> { data.name } </h1>  
            </div>
            
            <div className=" contact ">
                <span>{data.contact}</span>
            </div>
            <div className=" address ">
                <span>{data.address}</span>
            </div>
            <div className=" pin ">
                <span>{data.pin}</span>
            </div>
            <div className=" des ">
                <span>{data.des}</span>
            </div>
            
        </div>
    );

}

// const data = {
    //     "name": "YOLO POLO",
    //     "address": "135/137, Abdulla Musabhai Chawl, Rambhau Bhogle Marg, Reay Road",
    //     "des": "A café is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks. The term 'café' comes from the French word meaning 'coffee'.",
    //     "image": "https://assets.cntraveller.in/photos/618e82491af22a472dbf4f9e/2:3/w_896,h_1344,c_limit/Cafe%20Duco%20Interiors-10.jpg",
    //     "pin": "400077",
    //     "contact": "+91-9875446798",
    //     "accessories": [
    //         {
    //             "name": "Wifi",
    //             "value": true
    //         },
    //         {
    //             "name": "AC",
    //             "value": false
    //         }
    //     ]
    // }

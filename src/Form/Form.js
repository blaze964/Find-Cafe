import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckBox } from "../CheckBox";
import './Form.scss';

import checkGreen from '../assets/icons/check-green.png';
import uncheckGreen from '../assets/icons/uncheck-green.png';
import back from "../assets/icons/back.png";

export const Form = () =>{

    const imageRef= useRef();
    const [images, setImage] = useState([]); // <-- ye apna image array, inital empty

    function addImage(){
        const imageurl = imageRef.current.value;
        setImage([...images, imageurl]);
    }

    const nameRef= useRef();
    const addressRef= useRef();
    const desRef= useRef();
    const pinRef= useRef();
    const contactRef= useRef();

    const [wifi, setWifi] = useState(false);
    const [ac, setAc] = useState(false);

    function onSubmit(){
        const object={
            name:nameRef.current.value,
            address:addressRef.current.value,
            des:desRef.current.value,
            image:imageRef.current.value,
            pin:pinRef.current.value,
            contact:contactRef.current.value,
            accessories:[
                {
                    name: 'Wifi',
                    value: wifi
                },
                {
                    name: 'AC',
                    value: ac
                },
            ]
        }

        const url = 'https://glen-atlantic-tractor.glitch.me/addPlace';

        fetch(url , 
        {
            method: 'POST', 
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
             
        })
            .then(res => res.json())
            .then(handleResponse)
            .catch(err => {
                console.log(err);
            })
        
        
    }

    function handleResponse(res){
        if (res.success==true){
            console.log(res);
            alert('New Place is Added');
        }
        else{
            console.log(res);
            alert('Please fill all the details..');
        }

    }
    
    
    function renderImage(item){
        return (
            <div>
                <img style={{width: 100, height: 100}} src={item}/>
            </div>
        )
    }

    const nav= useNavigate();
    function onBack(){
        nav('/home');
    }


    return(
    <div className="form">
        <div className="main-container">

            
            <div className="back-container">
                <img className="back" onClick={onBack} src={back}/>
                {/* <button id='back' onClick={onBack}>BACK</button> */}
            </div>
            
            <div className="middle-container"> 

                <div className="left-side">

                    <div className="title">
                        <h1 >Add Cafe</h1>
                       
                    </div>

                    <div className="row">
                        <input ref={nameRef} id='name' type="text" placeholder="Name"/>
                    </div>

                    <div className="contact-pin row">
                        <input ref={contactRef} id='contact' placeholder="Contact Number"/>
                        <div style={{width: 10}}/>
                        <input ref={pinRef} id='pin' placeholder="Pincode"/> 
                    </div>
                    
                    <div className="row">
                        <textarea ref={addressRef} id="address"  placeholder="Address"/>
                    </div>
                    
                    <div className="row">
                        <textarea ref={desRef} id='description' placeholder="Description.."/>
                    </div>

                    
                    
                        <div className="access">
                            <CheckBox checkIcon={checkGreen} unCheckIcon={uncheckGreen} checked={wifi} setChecked={setWifi} className="wifi"/><span>WiFi</span>
                            <CheckBox checkIcon={checkGreen} unCheckIcon={uncheckGreen} checked={ac} setChecked={setAc} className="ac"/><span>AC</span>
                    
                            {/* <input type="checkbox" className="wifi" value="wifi" /><span>WiFi</span>
                            <input type="checkbox" className="ac" value="ac" /><span>AC</span> */}
                        </div>
                    

                    <div className="row">
                        <button className='submit' onClick={onSubmit}>Submit</button>
                    </div>

                    
                                    
                </div>

                <div className="right-side">
                    
                    <div className="row">
                        <input ref={imageRef} placeholder="add image url"/>
                        <button className="addImage" onClick={addImage}>ADD</button>    
                    </div>

                    <div className="image-container">
                        { images.map(renderImage) }
                    </div>
                    
                </div>

            </div>
            

            {/* <div className="bottom-container">

                
                
                <div className="buttons">
                    <div className="back">
                        <button id='back' onClick={onBack}>BACK</button>
                    </div>
                    
                    
                </div> 
                

            </div> */}

        </div>
    </div>
    );
};

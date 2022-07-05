import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Card} from "./Card";
import homeBG from "../assets/icons/homeBG.webp";
import "./Home.scss";
import img from '../assets/icons/sign.png';
import arrow from '../assets/icons/arrow.png'

export const Home = () => {

    // function getData() {
    //     const url = 'https://glen-atlantic-tractor.glitch.me/getPlaces';
    //     const promise = fetch(url,{method: 'Get' })
    //     // .then(res=>{return res.json()})
    //     console.log(promise);

    // }
    
    const[ places , setPlaces ] = useState([]);
    
    function handleResponse(res){
        if(res.success==true){
            setPlaces(res.places);
        }
        else{
            alert('there is some issue');
        }
    }

    useEffect(() => {

        const url = 'https://glen-atlantic-tractor.glitch.me/getPlaces';
        fetch(url,{method: 'GET' })
            .then(res=>{return res.json()})
            .then(handleResponse)
            .catch(err => {
                console.log(err)
            })
    }, []);

    function renderCard(item){
        return (
            <div>
                <Card key={Math.random()} data={item}/>
            </div>
            );
    }

    const nav = useNavigate();

    function addPlace(){
        nav('/addPlace');
    }

    function backToLogin(){
        nav('/');
    }

    return(
        
        <div className="home">
            <img style={{ 
                position: "fixed",
                width: '100vw',
                height: '100vh',
                objectFit: 'cover',
                zIndex: -1,
             }} src={homeBG}/>

             <div style={{ 
                position: "absolute",
                left:0,
                right: 0,
                height: '102vh',
                backgroundColor: '#155540',
                opacity:0.4,
                zIndex: -1,
             }}/>

            <div className="top-bar">
                
                <button className="login-direct" onClick={backToLogin}>Back</button> 
                <h1 className="title">Home</h1>
                <button className="form-direct" onClick={addPlace}>Add Place</button>

            </div>
            <div className="logo">
                <div className="heading">
                    <h1>Yolo Polo Café</h1>
                    <img src={img}></img>
                </div>
                <div><span>Find your favourite Cafe in one click</span></div>
            </div>
            <div className="container">
                
                <div>
                    <img src={arrow} className="arrow-left"/>
                </div>
                
                <div className="card-container">
                    { places.map(renderCard) }
                </div>
                
                <div>
                    <img src={arrow} className="arrow-right"/>
                </div>
                
                
            </div>
        </div>
        
        
    );
    
}


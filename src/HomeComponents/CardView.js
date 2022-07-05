import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "./Card";
import close from "../assets/icons/cross.png"
import "./CardView.scss";

export const CardView = () =>{

    const location = useLocation();
    const data = location.state;

    const nav = useNavigate();
    function handleClose(){
        nav('../home');
    }

    return(
        <div className="card-view">
                    
                <img style={{
                 
                    position : 'fixed',
                    width : '100vw',
                    height : '100vh',
                    objectFit : 'cover',
                    zIndex : -1,

                }}
                src={data.image}/>

                <div style={{ 
                    position: "absolute",
                    left:800,
                    right: 0,
                    height: '100vh',
                    backgroundColor: '#e28743',
                    opacity:0.7,
                    zIndex: -1,
                }}/>
                
            <div className="left-container">
                <div className="title">
                    <h1 className="cafeName"> { data.name } </h1>  
                </div>
            </div>
            
            
            <div className="right-container">
                <div className="close">
                    <img onClick={handleClose} src={close}/>
                </div>
                <div className=" contact ">
                    <h3>CONTACT</h3>
                    <span> {data.contact}</span>
                </div>

                <div className=" address ">
                    <h3>ADDRESS</h3>
                    <span> {data.address}</span>
                    <span> {data.pin}</span>
                </div>

                <div className=" des ">
                    <h3>DESCRIPTION</h3>
                    <span> {data.des}</span>
                </div>

                <div className="image-container">
                    <h3>More Images</h3>
                    <div className="images">
                        <img src={data.image}/>
                        <img src={data.image}/>
                        <img src={data.image}/>
                    </div>
                    
                </div>

            </div>
            
        </div>

    );
}
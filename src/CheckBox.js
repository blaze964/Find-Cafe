import React, { Component } from 'react';
import { useState } from 'react';
import uncheck from './assets/icons/stop.png';
import check from './assets/icons/check.png';

export const CheckBox = ({name, className, checked, setChecked, checkIcon, unCheckIcon}) =>{
  
    function onCheck(){
      setChecked(!checked);
    }
  
    return(
      <div className={className} onClick={onCheck}>
        <div >{name} </div>
        <img src={checked ? checkIcon || check: unCheckIcon || uncheck} />
      </div>
    )
  }


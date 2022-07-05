import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import img from '../assets/icons/sign.png';
import { CheckBox } from '../CheckBox';

//  https://glen-atlantic-tractor.glitch.me/login?email=blaze@star.com&pass=universe

export const Login = () =>{

    
    const nav= useNavigate();


    function through(){
        nav('/home');
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tick, settick] = useState(false);   

    function handleEmail(event){
        setEmail(event.target.value);
    }

    function handlePass(event){
        setPass(event.target.value);
    }

    function alertMessage(){
        alert('Email : ' + email + ' Password : ' + pass )
    }

    function login(){
        const url= 'https://glen-atlantic-tractor.glitch.me/login?email='+email+'&pass='+pass;    
        let promise=fetch(url,{method:'GET'})
        let jsonPromise= promise.then(res=>{return res.json();});
        let response= jsonPromise.then(handleResponse)
        response.catch(handleError)
    }

    function handleError(err){
        alert(err);
    }
    
    function handleResponse(res){
        if (res.success==true){
            through();
            localStorage.setItem('email', email);
            localStorage.setItem('isLoggedIn', true);
        }
        else{
            alert(res.message);
        }
    }

    // useEffect(() => {
    //     if(localStorage.getItem('isLoggedIn') == 'true'){
    //         through();
    //     }
    // }, []);
    
   return(
    <div className="login">
        <div className="main-container">

            <div className="top-container">
                <div className="button">
                    {/* <h5>{'>'}</h5> */}
                    <h5>Back</h5>
                </div>
            </div>

            <div className="bottom-container">
                <div className="left-container">
                    
                    <div className="title">
                        YoloPolo Café
                        <img src= {img}/>
                    </div>
                    
                    <p>A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, e.g. espresso,
                    latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee, iced tea, and other non-caffeinated 
                    beverages. In continental Europe, cafés serve alcoholic drinks.A coffeehouse, coffee shop, or café is an establishment that primarily serves coffee of various types, e.g. espresso,
                    latte, and cappuccino. Some coffeehouses may serve cold drinks, such as iced coffee, iced tea, and other non-caffeinated 
                    beverages. In continental Europe, cafés serve alcoholic drinks.</p>
                    
                </div>

                <div className="right-container">

                    <div className="box">
                
                        <div className="title">
                            Log In
                        </div>
                        <div className="content">

                            <input id="email" 
                            onChange={handleEmail} 
                            placeholder="Email" type="email" 
                            value={email}
                            />
                            <input id="pass" onChange={handlePass} placeholder="Password" type="password" value={pass}/>
                            <a id="forgot-pass" href="#">Forgot password?</a>
                
                            <div className="term-container">
                                <CheckBox checked={tick} setChecked={settick}/>
                                <h2 id="term">I agree to terms and conditions</h2>
                            </div>

                            {/* <div className="term-container">
                                <input type="radio"/>
                                <label id="term">I agree to terms and conditions </label>
                            </div> */}
                            
                            <button id="next" onClick={login}>Next</button>
                        </div>

                    </div>
                  
                </div>
            </div>
       </div>
    </div>
   );
}
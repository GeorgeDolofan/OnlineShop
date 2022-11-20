import * as React from 'react';
import classes from "./styles.module.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState, useEffect } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



let usernameValue:string;
let emailValue:string;
let passwordValue:string;
let retypepasswordValue:string;

const SignupCard = (props:any) => {
    
    
    

    const emailCheck = (email:string) =>{
        let mailformat =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(mailformat.test(email)){
            return true;
        }
        else return false;

    }

    const strongPass = (pass:string) => {
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(mediumRegex.test(pass)){
            return true;
        }
        else return false;

    };


    
    
    const clickHandler = (e:any) => {
        e.preventDefault();
        
        console.log(usernameValue,emailValue,passwordValue,retypepasswordValue);
        if(usernameValue===undefined||usernameValue===null||usernameValue.length<=2)props.setOpen1(true);//username
            else if(emailCheck(emailValue)!=true){
                props.setOpen2(true);
            }else if(strongPass(passwordValue)!=true){
                props.setOpen3(true);
            }else if(passwordValue!=retypepasswordValue){
                props.setOpen4(true);
            }else{
                //request to API
            }
            
        
    
    }


    return(
        <div className={classes.card}>
            <span>Online Shop</span>
            <form>
                <div className={classes.input_container}>
                    <label>Username</label>
                    <input id="username" name="username" type="text" onChange={(e)=>{usernameValue=e.target.value;}}></input>
                    <label>Email</label>
                    <input id="email" name="email" type="text" onChange={(e)=>{emailValue=e.target.value;}}></input>
                    <label>Password</label>
                    <input id="password" name="password" type="password" onChange={(e)=>{passwordValue=e.target.value;}}></input>
                    <label>Retype Password</label>
                    <input id="password2" name="password2" type="password" onChange={(e)=>{retypepasswordValue=e.target.value;}}></input>
                    
                </div>
                <div className={classes.button_container}>
                    <button onClick={clickHandler}>Sign Up</button>
                    
                </div>
            </form>
           

        </div>
    );
}
export default SignupCard;
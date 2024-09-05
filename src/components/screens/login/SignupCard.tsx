import * as React from 'react';
import classes from "./styles.module.css";
import axios from 'axios';




let usernameValue:string;
let emailValue:string;
let passwordValue:string;
let retypepasswordValue:string;

const SignupCard = (props:any) => {
    
    
    

    const emailCheck = (email:string) =>{
        let mailformat = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
        if(mailformat.test(email)){
            return true;
        }
        else return false;

    }

    const mediumPass = (pass:string) => {
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
        if(mediumRegex.test(pass)){
            return true;
        }
        else return false;

    };


    
    
    const clickHandler = async (e:any) => {
        e.preventDefault();
     
        if(usernameValue===undefined||usernameValue===null||usernameValue.length<=2)props.setOpen1(true);//username
            else if(emailCheck(emailValue)!=true){
                props.setOpen2(true);
            }else if(mediumPass(passwordValue)!=true){
                props.setOpen3(true);
            }else if(passwordValue!=retypepasswordValue){
                props.setOpen4(true);
            }else{
                try {
                    let data = JSON.stringify({username:usernameValue, emailAddress:emailValue, password:passwordValue});
                    let response = await axios.post("http://localhost:8080/register", data , {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',}});
                    console.log(response);
                    if(response.data==="register_success"){
                        props.setSuccess(true);

                    }
                    
                    
                } catch(error:any){
                    console.log(error.response);
                    if(error.response.data.message==="Email already used")props.setOpenError1(true);
                    else if(error.response.data.message==="Username already used")props.setOpenError2(true);
                }
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
                    <button className={classes.button} onClick={clickHandler}>Sign Up</button>
                    
                </div>
            </form>
           

        </div>
    );
}
export default SignupCard;
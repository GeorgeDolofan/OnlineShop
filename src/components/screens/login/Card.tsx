import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";

let emailValue:string;
let passwordValue:string;



const loginHandler = async (e:any) => {
    e.preventDefault();
    try { 
        let data = JSON.stringify({email:emailValue, password:passwordValue});
        let response = await axios.post("http://localhost:8080/login", data , {headers:{'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json',}});
        console.log(response.data);
        window.localStorage.setItem("jwt",response.data[0]);
        window.localStorage.setItem("userRole",response.data[1]);
        window.localStorage.setItem("username",response.data[2]);
        window.location.href = "/home";
        
        
    }catch(error:any){
        console.log(error.response.data);
    }


}

const Card = () => {
    return(
        <div className={classes.card}>
            <span>Online Shop</span>
            <form>
                <div className={classes.input_container}>
                    <label>Email</label>
                    <input id="email" name="email" type="text" onChange={(e)=>{emailValue = e.target.value;}} ></input>
                    <label>Password</label>
                    <input id="password" name="password" type="password" onChange={(e)=>{passwordValue = e.target.value;}} ></input>
                    
                </div>
                <div className={classes.button_container}>
                    <button className={classes.button} onClick={loginHandler}>Login</button>
                    <span>Don't have an account yet? <Link to="/signup">Sign up!</Link></span>
                </div>
            </form>

        </div>
    );
}
export default Card;
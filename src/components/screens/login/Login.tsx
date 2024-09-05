import classes from "./styles.module.css";
import Wave from "react-wavify";
import Card from "./Card";
import { useEffect } from "react";

const Login = () => {

    useEffect(() => {
        window.localStorage.setItem("jwt","");
        window.localStorage.setItem("userRole","");
    })

    return(
    
    <div>
        <div className={classes.bg}>
        <Card/>
        <Wave className={classes.wave} fill='#98A8F8'
            paused={false}
            options={{
                height: 50,
                amplitude: 80,
                speed: 0.2,
                points: 5
            }} />
        </div>
           
     </div>
 
  
    );
}
export default Login;
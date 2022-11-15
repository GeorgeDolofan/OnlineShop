import classes from "./styles.module.css";
import Wave from "react-wavify";
import Card from "./Card";

const Login = () => {
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
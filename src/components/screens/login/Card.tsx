import { Link } from "react-router-dom";
import classes from "./styles.module.css";


const clickHandler = (e:any) => {
    e.preventDefault();

}

const Card = () => {
    return(
        <div className={classes.card}>
            <span>Online Shop</span>
            <form>
                <div className={classes.input_container}>
                    <label>Email</label>
                    <input id="email" name="email" type="text"></input>
                    <label>Password</label>
                    <input id="password" name="password" type="password" ></input>
                    
                </div>
                <div className={classes.button_container}>
                    <button onClick={clickHandler}>Login</button>
                    <span>Don't have an account yet? <Link to="/signup">Sign up!</Link></span>
                </div>
            </form>

        </div>
    );
}
export default Card;
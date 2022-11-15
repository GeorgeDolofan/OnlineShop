import classes from "./styles.module.css";

const Card = () => {
    return(
        <div className={classes.card}>
            <span>Online Shop</span>
            <form>
                <div className={classes.input_container}>
                    <label>Email</label>
                    <input id="email" name="email" type="text"></input>
                    <label>Password</label>
                    <input id="password" name="email" type="password" ></input>
                    
                </div>
                <div className={classes.button_container}>
                    <button>Login</button>
                </div>
            </form>

        </div>
    );
}
export default Card;
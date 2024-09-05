import { useEffect } from "react";
import classes from "./styles.module.css"
import NavBar from "./NavBar";

function Home(){

    useEffect(() => {

        console.log(window.localStorage.getItem("jwt"));
        console.log(window.localStorage.getItem("userRole"));
        console.log(window.localStorage.getItem("username"));

    },[])

    return(
        <div className={classes.bg}>
            <NavBar />
            
        </div>
    );
}
export default Home;
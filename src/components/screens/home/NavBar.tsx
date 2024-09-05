import classes from "./styles.module.css";

const NavBar = () => {
    return (

        <div className={classes.navbar}>
            <h1>Online Shop</h1>
            <input className={classes.searchbar} type="text" placeholder="Search product name here"></input>
            <button className={classes.navbutton}>Products</button>
        </div>

    );
}
export default NavBar;
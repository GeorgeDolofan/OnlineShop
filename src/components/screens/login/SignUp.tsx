import classes from "./styles.module.css";
import Wave from "react-wavify";
import Card from "./Card";
import SignupCard from "./SignupCard";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState } from 'react';
import * as React from 'react';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Signup = () => {

    const [open1,setOpen1] = useState(false);//Username
    const [open2,setOpen2] = useState(false);//email
    const [open3,setOpen3] = useState(false);//pass
    const [open4,setOpen4] = useState(false);//retypepass

    return(
    
    <div>
        <div className={classes.bg}>
        <SignupCard setOpen1={(value:any) => setOpen1(value)} setOpen2={(value:any) => setOpen2(value)} setOpen3={(value:any) => setOpen3(value)} setOpen4={(value:any) => setOpen4(value)}/>
        <Wave className={classes.wave} fill='#98A8F8'
            paused={false}
            options={{
                height: 50,
                amplitude: 80,
                speed: 0.2,
                points: 5
            }} />
        </div>
            <Snackbar
            anchorOrigin={{ vertical:"bottom", horizontal:"right" }}
            open={open1}
            autoHideDuration={6000}
            onClose={()=>{setOpen1(false)}}
            message="Username too short."
            
            />
             <Snackbar
            anchorOrigin={{ vertical:"bottom", horizontal:"right" }}
            open={open2}
            autoHideDuration={6000}
            onClose={()=>{setOpen2(false)}}
            message="Email not valid."
            
            />
             <Snackbar
            anchorOrigin={{ vertical:"bottom", horizontal:"right" }}
            open={open3}
            autoHideDuration={6000}
            onClose={()=>{setOpen3(false)}}
            message="Password too weak."
            
            />
             <Snackbar
            anchorOrigin={{ vertical:"bottom", horizontal:"right" }}
            open={open4}
            autoHideDuration={6000}
            onClose={()=>{setOpen4(false)}}
            message="Passwords don't match."
            
            />
        
           
     </div>
 
  
    );
}
export default Signup;
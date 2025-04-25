import "./alert.css"
import {useEffect} from "react";
export function Alert({ displayAlert,setDisplayAlert }) {

    useEffect(() => {
        if (displayAlert) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, [displayAlert]);
    return (

        <div id="dialogoverlay" >
                <div>
                    <img src="/assets/cloud1.png" alt="" id={"cloud1"}/>
                    <img src="/assets/cloud2.png" alt="" id={"cloud2"}/>
                    <div id="dialogboxbody">
                        <p className={"md-bold-text"}>Christel Detour : </p>
                        <p className={"md-text"}>Une place est disponible pour un enfant de moins de 3 ans, en temps plein.</p>
                    </div>
                        <button className="md-text" onClick={()=>setDisplayAlert(false)} >J'ai compris</button>

                </div>
        </div>
    );
}
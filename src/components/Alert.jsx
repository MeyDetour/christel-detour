import "./alert.css"
import {useEffect} from "react";
export function Alert({ displayAlert,setDisplayAlert }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (displayAlert) {
                document.body.style.overflowY = "hidden";
            } else {
                document.body.style.overflowY = "scroll";
            }
        }

        return () => {
             if (typeof window !== "undefined") {
                document.body.style.overflowY = "scroll";
            }
        };
    }, [displayAlert]);


    if (!displayAlert) return null;
    return (

        <div id="dialogoverlay" >
                <div>
                    <img src="/assets/cloud1.png" alt="" id={"cloud1"}/>
                    <img src="/assets/cloud2.png" alt="" id={"cloud2"}/>
                    <div id="dialogboxbody">
                        <p className={"md-bold-text"}>Christel Detour : </p>
                        <p className={"md-text"}>Une place en temps plein est disponible pour un bébé pour la rentrée 2027.<br></br>
Ne tardez pas à nous contacter pour anticiper votre mode de garde !</p>
                    </div>
                        <button className="md-text" onClick={()=>setDisplayAlert(false)} >J'ai compris</button>

                </div>
        </div>
    );
}

import "./alert.css"
export function Alert({ displayAlert,setDisplayAlert }) {

    if (!displayAlert){

        if (typeof window !== 'undefined') {
            document.body.style.overflowY = "scroll";
        }
        return;
    }

    if (typeof window !== 'undefined') {
        document.body.style.overflowY = "hidden";
        window.scrollTo(0, 0);
    }
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
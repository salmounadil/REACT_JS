import React, {useEffect, useState} from "react";



function DisplayTime() {
    let [tempsJavaScript, tien] = useState(new Date().getTime());

    setInterval(() => {
        tien(new Date().getTime())
    }, 1000);

    useEffect(()=>{
            document.title = tempsJavaScript;
    });

    return (
        <div>
            <p>
                Temps Javascript: {tempsJavaScript} millisecondes
            </p>
            <button onClick={()=> tien(new Date().getTime())}>Mettre à jour</button>
        </div>
    )
}

export default DisplayTime;
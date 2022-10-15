import React from "react";
import Carte from "./carte";

class Body extends React.Component{
    render(){
        return(
            <article class='d-flex justify-content-center align-items-center py-5 '>
            <Carte/>
            </article>
        )
    }
}

export default Body
import React from "react";
import ImageCarte from "./imageCarte";
import BodyCarte from "./bodyCarte";
import FooterCarte from "./footerCarte";


class Carte extends React.Component{
    render(){
        return(
            <div class="carte">
            <ImageCarte/>
            <BodyCarte/>
            <FooterCarte/>
            </div>
        )
    }
}

export default Carte
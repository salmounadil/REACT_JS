import React from "react";

class FooterCarte extends React.Component{
    render(){
        return(
           <div class="d-flex justify-content-start gap-2 align-items-center py-3">
            <img class="avatar" src="./images/image-avatar.png" alt="" />
            <span class="creation">Creation of <span class="bleu">Jules Wyvern</span></span>
           </div>
        )
    }
}

export default FooterCarte
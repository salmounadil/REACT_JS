import React from "react";

class BodyCarte extends React.Component{
    render(){
        return(
            <div>
                <h4 class="bleu">Equilibrium #3429</h4>
                <p>Our Equilibrium collection promotes balance and calm</p>
                <div class="bodycarte d-flex">
                    <div class="col-6 d-flex justify-content-start gap-2 align-items-center">
                        <img class="img2" src="./images/icon-ethereum.svg" alt="" />
                    <span class="span1">0.041 ETH</span>    
                    </div>
                    <div class="col-6 d-flex justify-content-end gap-2 align-items-center">
                        <img class="img" src="./images/icon-clock.svg" alt="" />
                    <span class="span2">3 days left</span>    
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default BodyCarte
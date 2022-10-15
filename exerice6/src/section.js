import React from "react";

class DisplayTime extends React.Component{
  render(){ let dateCourante = new Date();
     let tempsJavascript = dateCourante.getTime();
     let tempsPHP = tempsJavascript / 1000;
   
    return (
      <div className="d-flex justify-content-center align-items-center p-3 gap-3">
         <p className="text-danger fw-bold">Temps Javascript: {tempsJavascript} millisecondes</p>
        <p className="text-warning fw-bold">Temps PHP: {tempsPHP} millisecondes</p>
        <p className="text-primary fw-bold">Temps pour un humain : {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}</p>
       </div>

    )
  }
}

export default DisplayTime;
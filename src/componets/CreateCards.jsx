import React from "react";


const CreateCards= ({Card})=>{
     console.log(Card)
    return(
        <div className="Container-Cards">
            <h1>{Card[0].Nome}</h1>
        </div>
    )
}

export default CreateCards;
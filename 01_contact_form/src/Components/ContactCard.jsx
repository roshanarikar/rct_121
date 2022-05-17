import React, { useState } from "react"
import "../Style/module.css"

export const ContactCard = ({id, Name, Email, phone, img_src}) =>{
    const [isActive,setIsActive] = useState(true);
    return(
        <div id="card">
           <div id="img"><img src={img_src} alt="" srcset="" /></div>
            <div>
                <div>{Name}</div>
                <div>{Email}</div>
            </div>
            <div id="clickCard">
                {isActive ? (
                    <div onClick={() => setIsActive(!isActive)}>
                        {" "}
                        click for Mobile Number{" "}
                    </div>
                ) : (
                    <div onClick={() => setIsActive(!isActive)}>{phone}</div>
                )} 
            </div>
        </div>
    )
}
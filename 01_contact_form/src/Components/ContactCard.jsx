import React from "react"
import "../Style/module.css"

export const ContactCard = ({id, Name, Email, phone, img_src}) =>{
    return(
        <div id="card">
           <div id="img">{img_src}</div>
           <div>{Name}</div>
           <div>{Email}</div>
           <div>{phone}</div>
        </div>
    )
}
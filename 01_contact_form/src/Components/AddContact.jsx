import React, { useState } from "react"

export const AddContact = (props) =>{
    const [ Name ,setName] = useState("");
    const [ Email,setEmail ] = useState("");
    const [ phone,setphone ] = useState("");
    const [ img_src,setimage ] = useState("");

    const handleClick = () =>{
        if(props.handleClick)  props.handleClick(Name,Email,phone,img_src);

        setName("");
        setEmail("");
        setphone("");
        setimage("");
    }
    return (
        <div>
            <div>
               <input placeholder="Enter Name"
               value={Name} 
               onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input placeholder="Enter Email" 
                value={Email} 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input placeholder="Enter Phone" 
                value={phone} 
                onChange={(e) => setphone(e.target.value)}/>
            </div>
            <div>
                <input placeholder="Enter image url" 
                value={img_src} 
                onChange={(e) => setimage(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleClick}>
                    Add Contact
                </button>
            </div>
        </div>
    )
}
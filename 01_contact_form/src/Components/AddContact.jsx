import React, { useState } from "react"

export const AddContact = () =>{
    
    return (
        <div>
            <div>
               <input placeholder="Enter Name"/>
            </div>
            <div>
                <input placeholder="Enter Email"/>
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
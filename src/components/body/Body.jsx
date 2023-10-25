import React, {useState} from "react";
import { Footer } from "./childcomponents/textfooter/Footer";

import './Body.css';

export const Body = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

    return (
        <div className="container-sm">
           <textarea className="form-control custom-input" id="textInput" rows="15" placeholder="Your text" onChange={handleInputChange} required/>
           <Footer text={inputValue}/> 
        </div>
    )
};
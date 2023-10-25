import React, { useState, useEffect } from "react";

import './Footer.css'

export const Footer = ({ text }) => {
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [includeSpace, setIncludeSpace] = useState(false)

  const countWords = (text) => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return 0;
    }
    const wordArray = trimmedText.split(/\s+/);
    return wordArray.length;
  };

  const countChars = (text, includeSpace) => {
    return includeSpace ? text.length : text.replace(/\s+/g, '').length;
  };

  const countSpace = () => {
    setIncludeSpace(!includeSpace)
  }

  useEffect(() => {
    setWords(countWords(text));
    setChars(countChars(text, includeSpace));
  }, [text, includeSpace]);

  return (
    <div className="container-fluid">
        <div className="form-check form-switch" id="toggler">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={countSpace}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Include spaces</label>
        </div>
        <p className="h3">
            {`There are ${words} words and ${chars} characters in this text`}
        </p>
    </div>
  );
};
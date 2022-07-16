import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUPClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLOClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleClearClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Removed!", "success");
    }

    const handleOnChange = (event) => {
        //console.log('Handle On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color : props.mode==='dark'?'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'black' : 'white', color : props.mode==='dark'?'white' : '#042743'}} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container mt-3" style={{color : props.mode==='dark'?'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

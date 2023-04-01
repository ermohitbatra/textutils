import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Coverted to upper case!", "success");
    }
    const handleOnChange = (e)=>{
        console.log("On Change");
        setText(e.target.value);
    }

    const copyText = ()=>{
        // var text = document.getElementById("myBox");
        // text.select()
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }

    const [text, setText] = useState("");
  return (
    <>
        <div className='container'>
            <h1 style={{color : props.mode === 'dark' ? 'white' : 'dark'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'dark'}}>
            <h1>Your text summary</h1>
            <p> {text.length > 0 ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
        </div>
    </>
  )
}

import React,{useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "succeess")
    }

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied", "succeess")
    }

    const clearText =()=>{
        
        setText('');
        props.showAlert("Cleared", "succeess")
    }

    const [text,setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>

<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

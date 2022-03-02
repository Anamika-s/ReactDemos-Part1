import { React ,useState } from "react";

export default function TxtForm(props)
{
  const [text, setText] = useState("Enter text here")
  const handleClick =()=>
  {
    console.log("Button is cliecked");
    setText("Value is changed");
    var uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }
  // const handleOnChange =(event)=>{

  //    console.log("Text is changed");
  //    setText(event.target.value);
  // }
  const handleOnChange =event=>
    setText(event.target.value);
 
  return(
<div>
  <label for="txtDes"> Enter Description </label>
  <textarea className="form-control" id="txtDes" name="txtDes" rows="10"cols="20" value={text} onChange={handleOnChange}></textarea>
  <button className="btn btn-primary" onClick={handleClick}> Convert to Upper Case </button>
</div>
  );
}
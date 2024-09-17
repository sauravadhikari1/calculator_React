import React from 'react'
import Button from './button'
const Keypad = (props) => {
  

  return (
    <div>
      <div className="keypad"> 
        <Button name="btn style1" value="C"  Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style1" value="AC" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style1" value="%" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style2" value="/" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="7" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="8" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="9" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style2" value="x" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="4" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="5" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="6" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style2" value="-" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="1" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="2" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="3" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style2" value="+" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3 zero" value="0" Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style3" value="." Addtodisplay={props.Addtodisplay}/>
        <Button name="btn style2" value="=" Addtodisplay={props.Addtodisplay}/>
        

    </div>
    </div>
  )
}

export default Keypad

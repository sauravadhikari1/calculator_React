const Button = (props) => {
    let btnName=props.name;
    let btnvalue=props.value;
    let Operation=props.Addtodisplay
      
  return (

    <button className={btnName} onClick={()=>
      Operation(btnvalue)
    }>{btnvalue} </button>
    
  )
}

export default Button

import React from 'react'

const Screen = (props) => {
  return (
    <div className='screen'>
       <div className="display1">
        <input type="text" className="input" value={props.topDisplay}/>
       </div>
       <div className="display2">{props.bottomDisplay}</div>
    </div>
  )
}

export default Screen

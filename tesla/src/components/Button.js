// import { useState } from "react";

function Button(props){
    // const [colorBtn, setColorBtn] = useState('disabled');
    return(
        <div className="btnContainer">
        {/* <button className={`btnSelect ${colorBtn==='activeBtn'?'active':'disabled'}`} onClick={()=>{
            setColorBtn('activeBtn');}}>
            {props.title} {props.price}</button> */}
        <button className={`btnSelect ${props.setColorActive==='activeBtn'?'active':'disabled'}`} onClick={()=>{
            props.setColorActive('activeBtn');}}></button>
    </div>
    )
}
export default Button;
//  if setColorActive => className="btnSelect active"
//  if setColorNone  => className="btnSelect"
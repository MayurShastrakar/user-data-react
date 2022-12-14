import React from 'react'
import './users.css'



export default function Cards(props){
    console.log(props.email)
    return(

        <div className='flex-card' style={{borderRadius:"10px", padding : "25px" , textAlign:"left", fontSize:"20px", border:'2px solid black', backgroundColor:'ActiveCaption'}}>
        <img src = {props.avatar} alt="User" style={{width:"130px" , margin : "0 30%", padding:"5px"}}/>
        <div className='info'> <span className='value'>Name : </span><span className='name'>{props.first_name} {props.last_name} </span></div>
        <div className='info'> <span className='value'>Email : </span><span className='name'>{props.email}</span></div>
        </div>
    )
}
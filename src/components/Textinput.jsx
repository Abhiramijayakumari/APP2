import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Textinput = () => {
    const [inputs,setInputs]= useState({sname:'',age:'',place:'',email:''})
    const inputHandler =(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs);
    }
  return (
    <div>
      <TextField variant='outlined' label='Name' onChange={inputHandler} name="sname" value={inputs.sname}/>
      <br /><br />
      <TextField variant='outlined' label='Age' onChange={inputHandler} name="age" value={inputs.age}/>
      <br /><br />
      <TextField variant='outlined' label='Place' onChange={inputHandler} name="place" value={inputs.place}/>
      <br /><br />
      <TextField variant='outlined' label='email' onChange={inputHandler} name="email" value={inputs.email}/>
      <br /><br />
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Textinput

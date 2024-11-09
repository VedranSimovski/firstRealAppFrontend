"use client"

import axios from 'axios';

const Button = ({ name, handleSubmit}) => {

  return <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', marginRight: '10px' }} onClick={handleSubmit}>{name}</button>
}

export default Button;
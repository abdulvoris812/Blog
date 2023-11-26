import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  let navigate = useNavigate()

  const [title, setTitle] = useState()
  const [img, setImg] = useState()
  const [category, setCategory] = useState()
  let url = "https://65018bd4736d26322f5bdf64.mockapi.io/sport"
  
  const handleSubmit = () => {
    const info = {
      title:title,
      img: img,
      category: category
    } 
    axios.post(url, info).then((res) => {
      console.log(res);
      navigate("/homepage/all")
    })
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="hero-box2">
          <h1 className='title'>Hush Kelibsiz!</h1>
          <p className='text'>blogingizni qo`shing</p> <br /> <br />
          <input  type="text"  placeholder='Enter Title'  className='input' onChange={(e) => setTitle(e.target.value)}/> <br /><br />
          <input type="text" placeholder='Enter Url addres image'  className='input' onChange={(e) => setImg(e.target.value)}/> <br /> <br />
          <p className='text'>Qaysi sahifaga qoshilishini tanlang</p>
          <select className="input2"  onChange={(e) => setCategory(e.target.value)}>
            <option value=" "></option>
            <option value="kino">Kino</option>
            <option value="sport">Sport</option>
          </select> <br /> <br />
          <button className='btn' onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Add

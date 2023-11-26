import React from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import Add from './add'
import SinglePage from './singlepage'
import { Route, Routes} from 'react-router-dom'

const Amaliy = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/*' element={<LoginPage/>}/>
        <Route path='/homepage/:category' element={<HomePage/>}/>
        <Route path='/add' element={<Add/>}/>
				<Route path="/singlepage/:id" element = {<SinglePage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default Amaliy;
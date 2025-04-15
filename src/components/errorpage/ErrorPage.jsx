import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='ErrorPageBody'>
      <div className="ErrorTextBox">
        <h1>404</h1>
        <p>Oops!! you lost my bro click <span onClick={() => navigate("/")} style={{color: "#ff4500"}}>here</span> to go back to home page</p>
      </div>
    </div>
  )
}

export default ErrorPage
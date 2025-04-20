import "./error.css"
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='ErrorPageBody'>
      <div className="ErrorTextBox">
        <h1>404</h1>
        <p>Oops!! looks like you are lost lets help you find  your way home <br/> click <span onClick={() => navigate("/")} style={{color: "purple", cursor: "pointer"}}>here</span> to go back to home page</p>
      </div>
    </div>
  )
}

export default ErrorPage